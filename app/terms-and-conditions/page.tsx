import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Terms and Conditions</h1>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: August 4, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the Ornitech website and custom software development services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">1. Engineering Services & Statements of Work</h2>
            <p>
              Services provided by Ornitech shall be governed by mutually executed Statements of Work (SOW) or Master Services Agreements (MSA) detailing project scope, deliverables, sprint schedules, and pricing models.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">2. Code Ownership & Intellectual Property Rights</h2>
            <p>
              Upon full payment of agreed fees for development services, client retains 100% full ownership of all custom source code, documentation, and digital assets produced specifically for the client engagement.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">3. Warranties & SLAs</h2>
            <p>
              Ornitech warrants that custom software deliverables will substantially conform to agreed technical specifications during warranty periods defined in project agreements.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">4. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms, contact us at <a href="mailto:info@ornitech.com" className="text-brand hover:underline">info@ornitech.com</a>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
