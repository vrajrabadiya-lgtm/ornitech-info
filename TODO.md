# Task: MongoDB + Gmail Email Integration for Ornitech Forms

## Plan
Backend is used only for form data submission (contact + collaborate forms). Submissions are stored in MongoDB and trigger two Gmail emails (confirmation to user, details to contact@ornitech.in).

## Steps
- [x] Install dependencies (mongodb, nodemailer, @types/nodemailer)
- [x] Create `.env.local` with MongoDB URI + Gmail credentials
- [x] Update `lib/storage.ts` to use MongoDB instead of file storage
- [x] Create `lib/email.ts` with nodemailer transport + HTML email templates
- [x] Update `app/api/contact/route.ts` to save to MongoDB + send emails
- [x] Update `app/api/collaborate/route.ts` to save to MongoDB + send emails
- [x] Verify TypeScript compiles without errors (`npx tsc --noEmit`)
- [x] Frontend forms connected to backend via `fetch()`
- [x] End-to-end test: POST `/api/contact` → saved to MongoDB + 2 emails sent (verified via `contact-test.json`)
- [x] End-to-end test: POST `/api/collaborate` → saved to MongoDB + 2 emails sent (verified via `collaborate-test.json`)
- [x] Validation error path: POST `/api/contact` with invalid data → 400 with field-specific errors (invalid name/email/message)
- [x] Edge case: POST `/api/contact` with malformed JSON → 500 with form-level error message
- [x] Validation error path: POST `/api/collaborate` with missing fields → 400 with field-specific errors (name/email/message/agree)
