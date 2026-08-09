import { MongoClient, type Db, type Collection } from "mongodb"

export interface SubmissionRecord {
  id: string
  type: "contact" | "collaborate"
  data: unknown
  submittedAt: string
}

/**
 * Storage layer for form submissions using MongoDB.
 *
 * Uses a module-level cached client to avoid reconnecting on every request
 * (important for serverless environments like Vercel).
 */

const MONGODB_URI = process.env.MONGODB_URI || ""

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set.")
  }

  const client = new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  await client.connect()

  cachedClient = client
  cachedDb = client.db("ornitech")

  return cachedDb
}

function getCollection(db: Db): Collection<SubmissionRecord> {
  return db.collection<SubmissionRecord>("submissions")
}

/**
 * Persists a form submission to MongoDB. Returns the created record.
 */
export async function saveSubmission(record: SubmissionRecord): Promise<SubmissionRecord> {
  const db = await connectToDatabase()
  const collection = getCollection(db)
  await collection.insertOne({
    id: record.id,
    type: record.type,
    data: record.data,
    submittedAt: record.submittedAt,
  })
  return record
}

/**
 * Creates a unique id (timestamp + random suffix).
 */
export function createSubmissionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}
