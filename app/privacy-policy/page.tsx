import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Ornitech",
  description: "Learn how Ornitech collects, uses, and protects your personal information.",
}

const SECTIONS = [
  {
    title: "1. Categories of Data We Gather",
    content: [
      {
        subtitle: "Data Submitted by You",
        text: "When you complete our inquiry forms — such as \"Contact Us\" or \"Let's Collaborate\" — we capture details like your name, email, phone number, employer/company, website address, the nature of your project, an approximate budget, and a description of your project needs. We use these details exclusively to reply to your request and carry out our services.",
      },
      {
        subtitle: "Data Gathered Automatically",
        text: "While browsing our site, certain technical details are logged automatically — your IP address, browser make/version, operating system, device category, which pages you view, how long you spend on them, and the site that referred you to us. This helps us optimize site performance and the overall visitor experience.",
      },
      {
        subtitle: "Tracking Tools and Cookies",
        text: "We use essential cookies to ensure the website functions correctly. We may also use analytics cookies (such as Vercel Analytics) to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.",
      },
    ],
  },
  {
    title: "2. Purposes for Using Your Data",
    content: [
      {
        subtitle: "Delivering Our Services",
        text: "Your contact details allow us to respond to inquiries, prepare estimates, arrange calls or meetings, and carry out the software development work you've requested.",
      },
      {
        subtitle: "Staying in Touch",
        text: "We might contact you regarding your inquiry, updates on ongoing projects, or relevant service information. We don't send unwanted promotional emails, and you can unsubscribe from non-essential messages whenever you like by reaching out to us.",
      },
      {
        subtitle: "Enhancing the Website",
        text: "De-identified visitor statistics let us see which pages draw the most traffic, how people move through the site, and what areas could use improvement.",
      },
      {
        subtitle: "Protecting Against Fraud",
        text: "IP addresses and other technical markers help us spot and stop unauthorized access attempts, spam submissions, and other fraudulent behavior on our platform.",
      },
    ],
  },
  {
    title: "3. How and Where We Keep Your Data",
    content: [
      {
        subtitle: "Storage Locations",
        text: "Submitted form data lives in a MongoDB Atlas database on secure cloud servers. Emails are routed through Gmail's SMTP service with TLS encryption applied. Our site itself runs on Vercel's edge network, with HTTPS required for every connection.",
      },
      {
        subtitle: "Protective Measures",
        text: "We rely on standard security practices, including encrypted transmission (HTTPS/TLS), keeping credentials safe via environment variables, validating and cleaning all form inputs, and restricting database access to authorized parties only.",
      },
      {
        subtitle: "How Long We Hold Data",
        text: "We keep submission records only as long as needed to serve their original purpose, or as long as the law requires. You can ask us to erase your data at any time.",
      },
    ],
  },
  {
    title: "4. When and With Whom We Share Data",
    content: [
      {
        subtitle: "No Sale of Personal Data",
        text: "We never sell, trade, lease, or otherwise hand over your personal details to outside parties for marketing purposes.",
      },
      {
        subtitle: "Third-Party Vendors",
        text: "We work with a handful of trusted vendors who support our operations — MongoDB Atlas for databases, Vercel for hosting, and Google for email — and each is bound by contract to keep your data confidential.",
      },
      {
        subtitle: "Legal Obligations",
        text: "Should the law require it, or should a valid request come from a government authority, we may share your information accordingly.",
      },
    ],
  },
  {
    title: "5. Rights You Can Exercise",
    content: [
      {
        subtitle: "Reviewing and Fixing Your Information",
        text: "You're entitled to ask what personal data we hold about you and to request that we correct anything inaccurate.",
      },
      {
        subtitle: "Requesting Removal",
        text: "You can ask us to erase your personal data from our records, and we'll do so unless a legal or legitimate business reason requires us to keep it.",
      },
      {
        subtitle: "Revoking Consent",
        text: "If our handling of your data depends on your consent, you may withdraw that consent whenever you choose by emailing hr@ornitech.in.",
      },
    ],
  },
  {
    title: "6. Links to Outside Sites",
    content: [
      {
        subtitle: "",
        text: "Our site may point you toward external destinations, including our profiles on LinkedIn, GitHub, and Instagram. We have no control over how those sites handle privacy, so we suggest reviewing their individual policies.",
      },
    ],
  },
  {
    title: "7. Reach Out to Us",
    content: [
      {
        subtitle: "",
        text: "For any inquiries, concerns, or requests tied to this notice or our handling of data, please get in touch:",
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              Legal
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: August 4, 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Ornitech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>ornitech.in</strong> or engage our software development services. Please read this policy carefully.
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
