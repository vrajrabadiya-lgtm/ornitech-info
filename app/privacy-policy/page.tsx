import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | Ornitech",
  description: "Learn how Ornitech collects, uses, and protects your personal information.",
}

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        text: "When you fill out our Contact Us or Let's Collaborate forms, we collect your full name, email address, phone number, company name, website URL, project type, budget range, and project description. This information is used solely to respond to your inquiry and provide our services.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, operating system, device type, pages visited, time spent on pages, and referring URLs. This data is collected to improve website performance and user experience.",
      },
      {
        subtitle: "Cookies & Tracking Technologies",
        text: "We use essential cookies to ensure the website functions correctly. We may also use analytics cookies (such as Vercel Analytics) to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your contact information to respond to project inquiries, provide quotes, schedule consultations, and deliver our software development services.",
      },
      {
        subtitle: "Communication",
        text: "We may send you emails related to your inquiry, project updates, or service information. We do not send unsolicited marketing emails. You may opt out of any non-essential communications at any time by contacting us.",
      },
      {
        subtitle: "Website Improvement",
        text: "Anonymized usage data helps us understand which pages are most visited, how users navigate our site, and where we can improve the user experience.",
      },
      {
        subtitle: "Security & Fraud Prevention",
        text: "We use IP addresses and technical data to detect and prevent unauthorized access, spam form submissions, and fraudulent activity on our website.",
      },
    ],
  },
  {
    title: "3. Data Storage & Security",
    content: [
      {
        subtitle: "Where Your Data Is Stored",
        text: "Form submissions are stored in a MongoDB Atlas database hosted on secure cloud infrastructure. Email communications are processed via Gmail SMTP with TLS encryption. Our website is hosted on Vercel's global edge network with HTTPS enforced on all connections.",
      },
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security practices including encrypted data transmission (HTTPS/TLS), environment variable protection for all credentials, input validation and sanitization on all form submissions, and access controls on our database.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain form submission data for as long as necessary to fulfill the purpose for which it was collected or as required by applicable law. You may request deletion of your data at any time by contacting us.",
      },
    ],
  },
  {
    title: "4. Sharing of Information",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "Ornitech does not sell, trade, rent, or otherwise transfer your personal information to third parties for marketing purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share data with trusted third-party service providers who assist in operating our website and services, including MongoDB Atlas (database), Vercel (hosting), and Google (email delivery). These providers are contractually obligated to keep your information confidential.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.",
      },
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to request access to the personal information we hold about you and to request corrections if any information is inaccurate.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that we delete your personal data from our systems. We will comply unless we are required to retain it for legal or legitimate business purposes.",
      },
      {
        subtitle: "Withdrawal of Consent",
        text: "Where we rely on your consent to process personal data, you have the right to withdraw that consent at any time by contacting us at contact@ornitech.in.",
      },
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      {
        subtitle: "",
        text: "Our website may contain links to third-party websites including our social media profiles (LinkedIn, GitHub, Instagram). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
      },
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      {
        subtitle: "",
        text: "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.",
      },
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      {
        subtitle: "",
        text: "We may update this Privacy Policy from time to time. The updated version will be indicated by a revised 'Last updated' date at the top of this page. We encourage you to review this policy periodically.",
      },
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      {
        subtitle: "",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
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
