import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms and Conditions | Ornitech",
  description: "Read the terms and conditions governing your use of the Ornitech website and services.",
}

const SECTIONS = [
  {
    title: "1. Agreeing to These Terms",
    content: [
      {
        subtitle: "",
        text: "By visiting or using the Ornitech website or by making use of any of our development services, you're confirming your agreement to these Terms. If you don't accept them, please refrain from using our site or services.",
      },
    ],
  },
  {
    title: "2. Guidelines for Using the Site",
    content: [
      {
        subtitle: "Acceptable Use",
        text: "This website is meant for lawful activities only — browsing our service offerings, sending project inquiries, reading blog content, and reaching out to our team. You agree not to engage in any activity on this site that breaches local, national, or international law.",
      },
      {
        subtitle: "Submitting Forms",
        text: "Whenever you fill out our contact or collaboration forms, you're agreeing that the details you provide are accurate, honest, and complete. Providing false, deceptive, or fraudulent details is not permitted under any circumstance.",
      },
    ],
  },
  {
    title: "3. Our Services",
    content: [
      {
        subtitle: "Availability of Services",
        text: "We retain the right to alter, pause, or end any part of our services or website at our discretion, without advance warning. We won't be held responsible to you or anyone else for any such change, pause, or discontinuation.",
      },
      {
        subtitle: "Pricing Information",
        text: "Any prices shown on our website are for general reference only. Actual project costs are established through individual scoping discussions and mutual sign-off. We may adjust our pricing structure at any point.",
      },
    ],
  },
  {
    title: "4. Ownership of Intellectual Property",
    content: [
      {
        subtitle: "",
        text: "Once a client has paid in full for a development project, they gain complete ownership of the custom code, designs, and digital deliverables created specifically for them, in line with what's specified in the relevant project contract.",
      },
    ],
  },
  {
    title: "5. Disclaimers and Liability Limits",
    content: [
      {
        subtitle: "Accuracy of Website Content",
        text: "We work to keep this site's information current and correct, but we don't guarantee its accuracy, completeness, or fitness for any particular purpose. The website is offered strictly on an 'as-is' basis.",
      },
      {
        subtitle: "External Website Links",
        text: "You may come across links to outside websites on our site. These are included purely for convenience. We don't oversee the content of those external sites and take no responsibility for them or for any harm that might result from visiting them.",
      },
    ],
  },
  {
    title: "6. Handling of Your Privacy",
    content: [
      {
        subtitle: "",
        text: "Using this site also means you're subject to our Privacy Policy, which forms part of these Terms by reference. We encourage you to read it to understand how we collect and use your personal data.",
      },
    ],
  },
  {
    title: "7. Get in Touch",
    content: [
      {
        subtitle: "",
        text: "For questions relating to these Terms and Conditions, feel free to reach out to us:",
      },
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              Legal
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Terms and Conditions</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: August 4, 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Ornitech website at <strong>ornitech.in</strong> and all associated software development services offered by Ornitech. Please read these Terms carefully before using our website or engaging our services.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                <div className="mt-3 space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-sm font-semibold text-slate-800">{item.subtitle}</h3>
                      )}
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="text-sm text-slate-700">
                <strong>Ornitech</strong><br />
                Office No-324, Center Point Co-operative Society, Bali Sheri, Mahidharpura, Surat-395003, India<br />
                Email: <a href="mailto:hr@ornitech.in" className="text-blue-600 hover:underline">hr@ornitech.in</a><br />
                Website: <a href="https://www.ornitech.in" className="text-blue-600 hover:underline">www.ornitech.in</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
