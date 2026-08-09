import { NextResponse } from "next/server"
import { validateCollaborate } from "@/lib/forms"
import { saveSubmission, createSubmissionId } from "@/lib/storage"
import { sendSubmissionEmails } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = validateCollaborate(body)

    if (!result.valid || !result.data) {
      return NextResponse.json(
        { success: false, errors: result.errors },
        { status: 400 }
      )
    }

    const data = result.data
    const record = {
      id: createSubmissionId(),
      type: "collaborate" as const,
      data,
      submittedAt: new Date().toISOString(),
    }

    await saveSubmission(record)

    // Send confirmation to user + details to contact@ornitech.in
    await sendSubmissionEmails(
      {
        fullName: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      },
      request
    )

    return NextResponse.json({ success: true, message: "Message received. We'll get back to you within 24 hours." })
  } catch (err) {
    console.error("Collaborate API error:", err)
    return NextResponse.json(
      { success: false, errors: { form: "Something went wrong. Please try again." } },
      { status: 500 }
    )
  }
}
