"use client"

import { useEffect } from "react"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global Layout Error:", error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-5 font-sans">
        <div className="mx-auto max-w-md text-center rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-2xl font-bold text-slate-900">Application Error</h1>
          <p className="mt-2 text-sm text-slate-600">
            A critical application error occurred. Please refresh or try again.
          </p>
          <div className="mt-6">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Reload Application
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
