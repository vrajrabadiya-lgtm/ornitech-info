"use client"

import Link from "next/link"
import { MapPin, ShieldCheck, FileText, ArrowRight } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Logo } from "@/components/logo"
import { useInView } from "@/hooks/use-in-view"

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Hire Us", href: "/contact" },
  { label: "Contact", href: "/contact" },
]

const TECH_LINKS = [
  { label: "Front-End", href: "/technologies/front-end" },
  { label: "Back-End", href: "/technologies/back-end" },
  { label: "Mobile App", href: "/technologies/mobile" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Cloud & DevOps", href: "/technologies/cloud-services" },
]

const OFFICES = [
  // { flag: "🇨🇦", country: "Canada", hq: true, address: "106 Shaded Creek Dr, Kitchener, ON N2P 0K7", phone: "+1 (425) 623-4723" },
  { flag: "🇮🇳", country: "India", address: "Office No-324, Center Point Co-operative Society, Bali Sheri, Mahidharpura, Surat-395003", phone: "+91 82008 67325" },
  // { flag: "🇮🇪", country: "Ireland", address: "20 Hawthorn Close, Clondalkin, Co. Dublin, D22 T6P8", phone: "+353 89 612 9175" },
]

export function SiteFooter() {
  const { ref: footerRef, inView: footerInView } = useInView(0.05)
  const { ref: textRef, inView: textInView } = useInView(0.01)

  return (
    <footer ref={footerRef as React.RefObject<HTMLElement>} className="relative overflow-hidden bg-foreground text-background">
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className={`relative mx-auto max-w-7xl px-5 pt-16 lg:px-8 transition-all duration-700 ${footerInView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        {/* Top CTA strip */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-bold text-white">Ready to build something great?</p>
            <p className="mt-1 text-sm text-white/60">Let&apos;s talk about your project — free consultation, no commitment.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90 hover:gap-3"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" footer />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Ornitech builds reliable software, mobile, and web products, partnering with startups and enterprises to ship expert IT solutions that scale.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <Link href="/privacy-policy" className="flex items-center gap-2 text-white/50 transition-all hover:text-white hover:translate-x-1">
                <ShieldCheck className="h-4 w-4" /> Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="flex items-center gap-2 text-white/50 transition-all hover:text-white hover:translate-x-1">
                <FileText className="h-4 w-4" /> Terms and Conditions
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Company</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {COMPANY_LINKS.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="inline-block text-white/55 transition-all hover:text-white hover:translate-x-1">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Technologies</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {TECH_LINKS.map((t) => (
                <li key={t.label}>
                  <Link href={t.href} className="inline-block text-white/55 transition-all hover:text-white hover:translate-x-1">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Our Offices</h3>
            <ul className="mt-5 space-y-5 text-sm">
              {OFFICES.map((o) => (
                <li key={o.country} className="flex gap-3 group">
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:scale-125">{o.flag}</span>
                  <div>
                    <p className="flex items-center gap-2 font-semibold text-white/80">
                      {o.country}
                      {o.hq && <span className="rounded bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">HQ</span>}
                    </p>
                    <p className="mt-1 max-w-xs text-white/40">{o.address}</p>
                    <p className="mt-1 text-white/55">{o.phone}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2 text-white/55">
                <MapPin className="h-4 w-4" />
                <a href="mailto:contact@ornitech.in" className="hover:text-white transition-colors">contact@ornitech.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div ref={textRef as React.RefObject<HTMLDivElement>} className="mt-14 pointer-events-none select-none overflow-hidden px-5 lg:px-8 pb-4">
        <p
          className="text-center text-[22vw] font-black leading-none tracking-tighter text-white"
          style={{
            opacity: textInView ? 1 : 0,
            transform: textInView ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          ornitech
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row mt-4">
          <p className="text-sm text-white/40">
            Copyright © 2026 All Rights Reserved By <span className="font-semibold text-white/70">Ornitech</span>
          </p>
          <div className="flex gap-2.5">
            {[
              { Icon: FaGithub, href: "https://github.com/Ornitech-26" },
              { Icon: FaInstagram, href: "https://www.instagram.com/ornitech_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/company/ornitech-solution/posts/?feedView=all" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-brand hover:text-white hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
