import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ArrowRight, Home, Search, Compass, Mail } from "lucide-react"

export const metadata = {
  title: "404 — Page Not Found | Ornitech",
  description: "The page you are looking for could not be found. Explore Ornitech software services, technologies, or contact our team.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-20 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            404 Error
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl" style={{ letterSpacing: "-0.03em" }}>
            Page Not Found
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:gap-3"
            >
              <Home className="h-4 w-4" /> Back to Homepage
            </Link>
            <Link
              href="/services"
              className="glass-chip inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-slate-700 border border-slate-200 transition-all hover:text-blue-600 hover:border-blue-300"
            >
              <Compass className="h-4 w-4" /> Explore Services
            </Link>
            <Link
              href="/contact"
              className="glass-chip inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-slate-700 border border-slate-200 transition-all hover:text-blue-600 hover:border-blue-300"
            >
              <Mail className="h-4 w-4" /> Contact Us
            </Link>
          </div>

          {/* Quick Helpful Destinations */}
          <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <Link href="/services" className="group rounded-2xl bg-white p-4 border border-slate-200/70 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Services &rarr;</p>
              <p className="text-[11px] text-slate-500 mt-1">Web, Mobile &amp; AI</p>
            </Link>
            <Link href="/technologies" className="group rounded-2xl bg-white p-4 border border-slate-200/70 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Technologies &rarr;</p>
              <p className="text-[11px] text-slate-500 mt-1">React, Next, Node, Cloud</p>
            </Link>
            <Link href="/founder" className="group rounded-2xl bg-white p-4 border border-slate-200/70 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Founder &rarr;</p>
              <p className="text-[11px] text-slate-500 mt-1">Meet Ronak Talaviya</p>
            </Link>
            <Link href="/contact" className="group rounded-2xl bg-white p-4 border border-slate-200/70 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Get a Quote &rarr;</p>
              <p className="text-[11px] text-slate-500 mt-1">Free Project Estimate</p>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
