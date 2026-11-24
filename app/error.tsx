"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home, Mail } from "lucide-react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error securely for observability
    console.error("Runtime Application Error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-5">
      <div className="mx-auto max-w-lg text-center rounded-[2.5rem] border border-red-100 bg-white p-8 sm:p-12 shadow-2xl shadow-red-500/5">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600 ring-8 ring-red-50/50">
          <AlertCircle className="h-10 w-10 stroke-[2.2]" />
        </div>

        <h1 className="mt-6 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          An unexpected error occurred while loading this page. Our technical team has been alerted. You can try refreshing or returning to the homepage.
        </p>

        {error.digest && (
          <p className="mt-2 text-[11px] font-mono text-slate-400">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            <Home className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <a
            href="mailto:hr@ornitech.in"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600"
          >
            <Mail className="h-3.5 w-3.5" /> Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
