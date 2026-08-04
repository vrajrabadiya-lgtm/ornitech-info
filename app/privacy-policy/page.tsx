import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: August 4, 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
            <p>
              Ornitech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our software development services.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when expressing interest in obtaining information about us or our products and services, such as name, email address, phone number, and project details submitted via our contact forms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs">
              <li>To provide, operate, and maintain our software engineering services.</li>
              <li>To respond to user inquiries and offer customer support.</li>
              <li>To send administrative information, project updates, or technical alerts.</li>
              <li>To protect our site and services against unauthorized access or fraud.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-6">3. Intellectual Property & Confidentiality</h2>
            <p>
              All client code bases, non-public project specifications, and proprietary data shared during engagements remain strictly confidential under Non-Disclosure Agreements (NDA) and client ownership policies.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-6">4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please email us at <a href="mailto:info@ornitech.com" className="text-brand hover:underline">info@ornitech.com</a>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
