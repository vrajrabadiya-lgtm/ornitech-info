"use client"

import Link from "next/link"
import { Globe, AtSign, Send, Rss, MapPin, ShieldCheck, FileText } from "lucide-react"
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
  {
    flag: "🇨🇦",
    country: "Canada",
    hq: true,
    address: "106 Shaded Creek Dr, Kitchener, ON N2P 0K7",
    phone: "+1 (425) 623-4723",
  },
  {
    flag: "🇮🇳",
    country: "India",
    address: "Pragati IT Park, B 409-410, opp. AR Mall, near VIP Circle, Utran, Surat, Gujarat 394105",
    phone: "+91 97275 72204",
  },
  {
    flag: "🇮🇪",
    country: "Ireland",
    address: "20 Hawthorn Close, Kilcarbery Grange, Clondalkin, Co. Dublin, D22 T6P8",
    phone: "+353 89 612 9175",
  },
]

export function SiteFooter() {
  const { ref, inView } = useInView(0.05)

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className={`mx-auto max-w-7xl px-5 pt-16 lg:px-8 transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              Ornitech builds reliable software, mobile, and web products, partnering with startups and
              enterprises to ship expert IT solutions that scale.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <Link href="/privacy-policy" className="flex items-center gap-2 text-ink-foreground/70 transition-all hover:text-ink-foreground hover:translate-x-1">
                <ShieldCheck className="h-4 w-4" /> Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="flex items-center gap-2 text-ink-foreground/70 transition-all hover:text-ink-foreground hover:translate-x-1">
                <FileText className="h-4 w-4" /> Terms and Conditions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-ink-foreground/50">COMPANY</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY_LINKS.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="inline-block text-ink-foreground/70 transition-all hover:text-ink-foreground hover:translate-x-1">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-ink-foreground/50">TECHNOLOGIES</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {TECH_LINKS.map((t) => (
                <li key={t.label}>
                  <Link href={t.href} className="inline-block text-ink-foreground/70 transition-all hover:text-ink-foreground hover:translate-x-1">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest text-ink-foreground/50">OUR OFFICES</h3>
            <ul className="mt-5 space-y-5 text-sm">
              {OFFICES.map((o) => (
                <li key={o.country} className="flex gap-3 group">
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:scale-125" aria-hidden="true">
                    {o.flag}
                  </span>
                  <div>
                    <p className="flex items-center gap-2 font-semibold">
                      {o.country}
                      {o.hq && (
                        <span className="rounded bg-brand px-1.5 py-0.5 text-[10px] font-bold text-brand-foreground">HQ</span>
                      )}
                    </p>
                    <p className="mt-1 max-w-xs text-ink-foreground/60">{o.address}</p>
                    <p className="mt-1 text-ink-foreground/70">{o.phone}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-2 text-ink-foreground/70">
                <MapPin className="h-4 w-4" />
                <a href="mailto:info@ornitech.com" className="hover:text-ink-foreground transition-colors">
                  info@ornitech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-ink-foreground/60">
            Copyright © 2026 All Rights Reserved By <span className="font-semibold text-ink-foreground">Ornitech</span>
          </p>
          <div className="flex gap-3">
            {[Globe, AtSign, Send, Rss].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-foreground/70 transition-all hover:border-brand hover:text-ink-foreground hover:scale-110 hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-6 text-center text-[22vw] font-extrabold leading-none tracking-tight text-white/[0.04]">
          ORNITECH
        </p>
      </div>
    </footer>
  )
}
