// Shared server-side validation and sanitization for form submissions.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/

export interface ContactInput {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}

export interface CollaborateInput {
  name: string
  email: string
  phone?: string
  website?: string
  projectType?: string
  budget?: string
  message: string
  agree?: boolean
}

export interface ValidationResult {
  valid: boolean
  errors: Record<string, string>
}

function cleanString(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLen)
}

function cleanOptionalString(value: unknown, maxLen: number): string | undefined {
  const s = cleanString(value, maxLen)
  return s === "" ? undefined : s
}

export function validateContact(input: unknown): ValidationResult & { data?: ContactInput } {
  const raw = (input ?? {}) as Record<string, unknown>
  const errors: Record<string, string> = {}

  const name = cleanString(raw.name, 100)
  const email = cleanString(raw.email, 200)
  const phone = cleanOptionalString(raw.phone, 40)
  const company = cleanOptionalString(raw.company, 150)
  const service = cleanOptionalString(raw.service, 100)
  const budget = cleanOptionalString(raw.budget, 100)
  const message = cleanString(raw.message, 5000)

  if (!name) errors.name = "Name is required."
  else if (name.length < 2) errors.name = "Name must be at least 2 characters."

  if (!email) errors.email = "Email is required."
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address."

  if (phone !== undefined && !PHONE_RE.test(phone)) errors.phone = "Enter a valid phone number."

  if (!message) errors.message = "Project details are required."
  else if (message.length < 20) errors.message = "Please provide at least 20 characters."

  const data: ContactInput = { name, email, phone, company, service, budget, message }

  if (Object.keys(errors).length > 0) return { valid: false, errors }
  return { valid: true, errors: {}, data }
}

export function validateCollaborate(input: unknown): ValidationResult & { data?: CollaborateInput } {
  const raw = (input ?? {}) as Record<string, unknown>
  const errors: Record<string, string> = {}

  const name = cleanString(raw.name, 100)
  const email = cleanString(raw.email, 200)
  const phone = cleanOptionalString(raw.phone, 40)
  const website = cleanOptionalString(raw.website, 300)
  const projectType = cleanOptionalString(raw.projectType, 100)
  const budget = cleanOptionalString(raw.budget, 100)
  const message = cleanString(raw.message, 5000)
  const agree = raw.agree === true

  if (!name) errors.name = "Full name is required."
  else if (name.length < 2) errors.name = "Name must be at least 2 characters."

  if (!email) errors.email = "Email is required."
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address."

  if (website !== undefined && !URL_RE.test(website)) errors.website = "Enter a valid URL."

  if (phone !== undefined && !PHONE_RE.test(phone)) errors.phone = "Enter a valid phone number."

  if (!message) errors.message = "Project details are required."
  else if (message.length < 20) errors.message = "Please provide at least 20 characters."

  if (!agree) errors.agree = "You must accept the privacy policy."

  const data: CollaborateInput = { name, email, phone, website, projectType, budget, message, agree }

  if (Object.keys(errors).length > 0) return { valid: false, errors }
  return { valid: true, errors: {}, data }
}
