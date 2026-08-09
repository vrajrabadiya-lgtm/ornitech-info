import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms and Conditions | Ornitech",
  description: "Read the terms and conditions governing your use of the Ornitech website and services.",
}

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "",
        text: "By accessing or using the Ornitech website (ornitech.in) or any of our software development services, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, please do not use our website or services.",
      },
    ],
  },
  {
    title: "2. Use of This Website",
    content: [
      {
        subtitle: "Permitted Use",
        text: "You may use this website for lawful purposes only — to learn about our services, submit project inquiries, read our blog, and contact our team. You agree not to use this website in any way that violates applicable local, national, or international laws or regulations.",
      },
      {
        subtitle: "Prohibited Activities",
        text: "You must not attempt to gain unauthorized access to any part of our website or its related systems. You must not transmit any unsolicited or unauthorized advertising material, spam, or any other form of solicitation. You must not use automated tools to scrape, crawl, or extract data from this website without our prior written consent.",
      },
      {
        subtitle: "Form Submissions",
        text: "When submitting information through our contact or collaboration forms, you agree to provide accurate, truthful, and complete information. Submitting false, misleading, or fraudulent information is strictly prohibited.",
      },
    ],
  },
  {
    title: "3. Services",
    content: [
      {
        subtitle: "Service Agreements",
        text: "The services described on this website (web development, mobile app development, AI development, etc.) are provided under separate written agreements, Statements of Work (SOW), or Master Services Agreements (MSA). Browsing this website does not constitute a service agreement.",
      },
      {
        subtitle: "Service Availability",
        text: "We reserve the right to modify, suspend, or discontinue any part of our services or website at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation.",
      },
      {
        subtitle: "Pricing",
        text: "Any pricing information displayed on this website is indicative only. Final pricing is determined through individual project scoping and mutual agreement. We reserve the right to change our pricing at any time.",
      },
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      {
        subtitle: "Website Content",
        text: "All content on this website including text, graphics, logos, images, and software is the property of Ornitech and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without our express written permission.",
      },
      {
        subtitle: "Client Work",
        text: "Upon full payment of agreed fees for a development engagement, the client retains 100% ownership of all custom source code, designs, and digital assets produced specifically for that engagement, as defined in the applicable project agreement.",
      },
      {
        subtitle: "Ornitech Portfolio Rights",
        text: "Unless explicitly restricted in a written agreement, Ornitech reserves the right to reference completed projects in our portfolio, case studies, and marketing materials.",
      },
    ],
  },
  {
    title: "5. Confidentiality",
    content: [
      {
        subtitle: "",
        text: "Any non-public information shared by clients during project engagements — including business requirements, technical specifications, proprietary data, and trade secrets — is treated as strictly confidential. Ornitech will not disclose such information to third parties without the client's prior written consent, except as required by law.",
      },
    ],
  },
  {
    title: "6. Disclaimers & Limitation of Liability",
    content: [
      {
        subtitle: "Website Accuracy",
        text: "While we strive to keep the information on this website accurate and up to date, we make no warranties or representations about the accuracy, completeness, or suitability of the information provided. The website is provided on an 'as is' basis.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "To the fullest extent permitted by law, Ornitech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services, even if we have been advised of the possibility of such damages.",
      },
      {
        subtitle: "Third-Party Links",
        text: "Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
      },
    ],
  },
  {
    title: "7. Privacy",
    content: [
      {
        subtitle: "",
        text: "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.",
      },
    ],
  },
  {
    title: "8. Governing Law",
    content: [
      {
        subtitle: "",
        text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat, India.",
      },
    ],
  },
  {
    title: "9. Changes to These Terms",
    content: [
      {
        subtitle: "",
        text: "We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website with a revised 'Last updated' date. Your continued use of the website after any changes constitutes your acceptance of the new Terms.",
      },
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      {
        subtitle: "",
        text: "If you have any questions about these Terms and Conditions, please contact us:",
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
                Email: <a href="mailto:contact@ornitech.in" className="text-blue-600 hover:underline">contact@ornitech.in</a><br />
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
