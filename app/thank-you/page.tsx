import Link from "next/link"
import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { pageMetadata } from "@/lib/seo"

export const metadata = {
  ...pageMetadata({
    title: "Thanks for Contacting Us",
    description: "Your message has been received by Ornitech.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Event snippet for Contact conversion page */}
      <Script id="google-ads-contact-conversion" strategy="afterInteractive">
        {`
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {'send_to': 'AW-18473466393/4W1UCLKc_a8dEJn06uhE'});
          }
        `}
      </Script>

      <SiteHeader />

      <main className="flex min-h-[70vh] items-center justify-center py-20 px-5">
        <div className="mx-auto max-w-xl text-center glass-card rounded-[2.5rem] border border-border bg-card p-8 sm:p-12 shadow-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
            Thank You for Reaching Out!
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We have received your message. A member of our team will review your project details and get back to you within 24 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
            >
              Back to Homepage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
