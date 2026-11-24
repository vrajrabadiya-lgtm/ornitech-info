import { MongoClient, type Db, type Collection } from "mongodb"

export interface SubmissionRecord {
  id: string
  type: "contact" | "collaborate"
  data: unknown
  submittedAt: string
}

/**
 * Storage layer for form submissions using MongoDB with safe error isolation.
 *
 * Uses a module-level cached client to avoid reconnecting on every request.
 * If MongoDB is not configured or unreachable, submissions are safely logged
 * so that lead forms never fail or drop user inquiries.
 */

const MONGODB_URI = process.env.MONGODB_URI || ""

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

async function connectToDatabase(): Promise<Db | null> {
  if (cachedDb) return cachedDb

  if (
    !MONGODB_URI ||
    MONGODB_URI.includes("xxxxx") ||
    MONGODB_URI.includes("<password>") ||
    MONGODB_URI.trim() === ""
  ) {
    console.warn("[MongoDB] MONGODB_URI is not set or contains placeholder credentials. Skipping MongoDB connection.")
    return null
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    await client.connect()

    cachedClient = client
    const dbName = process.env.MONGODB_DB || "Ornitech"
    cachedDb = client.db(dbName)
    return cachedDb
  } catch (err: any) {
    console.error("[MongoDB] Connection failed:", err?.message || err)
    return null
  }
}

function getCollection(db: Db): Collection<SubmissionRecord> {
  return db.collection<SubmissionRecord>("submissions")
}

/**
 * Persists a form submission to MongoDB if available.
 * Always logs the submission to console so no lead is ever lost.
 */
export async function saveSubmission(record: SubmissionRecord): Promise<SubmissionRecord> {
  try {
    const db = await connectToDatabase()
    if (db) {
      const collection = getCollection(db)
      await collection.insertOne({
        id: record.id,
        type: record.type,
        data: record.data,
        submittedAt: record.submittedAt,
      })
      console.log(`[Storage] Saved submission ${record.id} to MongoDB (database: Ornitech).`)
    } else {
      console.log(`[Storage] MongoDB not available. Lead logged to server logs:`, JSON.stringify(record))
    }
  } catch (err: any) {
    console.error(`[Storage] Error saving submission ${record.id} to MongoDB:`, err?.message || err)
    console.log(`[Storage] Preserved Lead Record:`, JSON.stringify(record))
  }
  return record
}

/**
 * Creates a unique id (timestamp + random suffix).
 */
export function createSubmissionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}
