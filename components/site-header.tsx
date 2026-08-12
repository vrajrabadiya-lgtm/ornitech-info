"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ChevronDown, Menu, X, ArrowRight,
  HeartPulse, Landmark, ShoppingBag, GraduationCap, Plane, Building2, Truck, Clapperboard, Dumbbell, UtensilsCrossed, Factory, Store,
  Users, UserPlus, Briefcase, LayoutGrid, BookOpen, Mail
} from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<"services" | "technologies" | "industries" | "company" | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 10)

      // Hide header when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
        setMobileOpen(false)
        setMobileSubmenu(null)
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const scrollY = window.scrollY
    const html = document.documentElement
    const body = document.body

    // Lock both html and body, and use fixed positioning to prevent iOS bounce scroll
    html.style.overflow = "hidden"
    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.left = "0"
    body.style.right = "0"

    return () => {
      html.style.overflow = ""
      body.style.overflow = ""
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  return (
    <>
      {/* Blurred Backdrop Overlay for Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-md transition-all duration-300 lg:hidden pointer-events-auto",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => {
          setMobileOpen(false)
          setMobileSubmenu(null)
        }}
        aria-hidden="true"
      />

      <div className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-3 transition-all duration-500 ease-in-out pointer-events-none sm:px-4",
        hidden ? "lg:-translate-y-full lg:opacity-0" : "translate-y-3 opacity-100 sm:translate-y-4"
      )}>
      <header
        ref={headerRef}
        className={cn(
          "w-full max-w-6xl rounded-[2rem] transition-all duration-300 pointer-events-auto",
          "bg-white border border-slate-200/80 shadow-md shadow-blue-900/8"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="mx-auto flex h-[56px] w-full items-center justify-between px-6 lg:px-8 relative">
          {/* Logo */}
          <Link href="/" aria-label="Ornitech home" onMouseEnter={() => setActiveMenu(null)} className="transition-transform duration-200 hover:scale-[1.02]">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex absolute left-1/2 -translate-x-1/2">
            {(["services", "technologies", "industries"] as const).map((key) => (
              <li key={key} onMouseEnter={() => setActiveMenu(key)}>
                <Link
                  href={`/${key}`}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-all",
                    activeMenu === key ? "text-brand bg-white backdrop-blur-xl shadow-sm" : "text-foreground/75 hover:text-brand hover:bg-white hover:backdrop-blur-xl hover:shadow-sm"
                  )}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeMenu === key ? "rotate-180 text-brand" : "text-muted-foreground")} />
                </Link>
              </li>
            ))}
            <li onMouseEnter={() => setActiveMenu(null)}>
              <Link href="/portfolio" className="flex items-center rounded-full px-4 py-2 text-[14px] font-medium text-foreground/75 transition-all hover:text-brand hover:bg-white hover:backdrop-blur-xl hover:shadow-sm">
                Portfolio
              </Link>
            </li>
            <li onMouseEnter={() => setActiveMenu("company")}>
              <Link
                href="/about"
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-all",
                  activeMenu === "company" ? "text-brand bg-white backdrop-blur-xl shadow-sm" : "text-foreground/75 hover:text-brand hover:bg-white hover:backdrop-blur-xl hover:shadow-sm"
                )}
              >
                Company
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeMenu === "company" ? "rotate-180 text-brand" : "text-muted-foreground")} />
              </Link>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2.5 lg:flex" onMouseEnter={() => setActiveMenu(null)}>
            <Link href="/contact" className="glass-chip rounded-full px-5 py-2 text-sm font-semibold text-foreground transition-all hover:text-brand">
              Hire Us
            </Link>
            <Link href="/contact" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25">
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="glass-chip inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

      <div
        className={cn(
          "absolute left-1/2 top-[64px] z-50 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-all duration-200",
          activeMenu !== null ? "visible opacity-100 translate-y-0 pointer-events-auto" : "invisible opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/12" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(40px) saturate(180%)", WebkitBackdropFilter: "blur(40px) saturate(180%)", border: "1px solid rgba(226,232,240,0.8)" }}>

          {/* Services */}
          {activeMenu === "services" && (
            <div className="grid lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-gradient-to-b from-brand/5 to-brand/10 p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Services</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Full-stack delivery across mobile, web, software, design, data, and cloud.</p>
                </div>
                <Link href="/services" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md w-fit transition-all hover:bg-brand/90">
                  Explore all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 p-5">
                {[
                  { href: "/services/web-development", icon: "N", color: "bg-slate-100 text-slate-700", label: "Web Development", desc: "Fast, SEO-ready web platforms." },
                  { href: "/services/mobile-app-development", icon: "F", color: "bg-blue-100 text-blue-700", label: "Mobile App Development", desc: "Native & cross-platform iOS and Android." },
                  { href: "/services/software-development", icon: "TS", color: "bg-indigo-100 text-indigo-700", label: "Software Development", desc: "Custom, scalable software end to end." },
                  { href: "/services/vibe-coding-development", icon: "V", color: "bg-purple-100 text-purple-700", label: "Vibe Coding Development", desc: "Ship faster with AI-assisted development." },
                  { href: "/services/ai-development-services", icon: "AI", color: "bg-violet-100 text-violet-700", label: "AI Development Services", desc: "Build intelligent AI-powered products." },
                  { href: "/services/ai-integration-services", icon: "🤖", color: "bg-amber-100 text-amber-700", label: "AI Integration Services", desc: "Layer intelligence onto what you run." },
                  // { href: "/services/ui-ux-design", icon: "🎨", color: "bg-rose-100 text-rose-700", label: "UI/UX Design", desc: "Research-led, conversion-focused design." },
                  { href: "/services/qa-testing", icon: "Q", color: "bg-emerald-100 text-emerald-700", label: "QA & Testing Services", desc: "Ship with confidence, every release." },
                  // { href: "/services/cloud-devops-security", icon: "☁️", color: "bg-sky-100 text-sky-700", label: "Cloud, DevOps & Security", desc: "Resilient infra, automated delivery." },
                  { href: "/services/data-analytics", icon: "📊", color: "bg-orange-100 text-orange-700", label: "Data Analytics", desc: "Turn raw data into decisions." },
                  { href: "/services/dedicated-development-team", icon: "D", color: "bg-cyan-100 text-cyan-700", label: "Dedicated Development Team", desc: "A full team, exclusively yours." },
                  { href: "/services/staff-augmentation", icon: "S", color: "bg-teal-100 text-teal-700", label: "Staff Augmentation", desc: "Extend your team on demand." },
                ].map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-white/40 hover:backdrop-blur-md">
                    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${item.color}`}>{item.icon}</span>
                    <div>
                      <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">{item.label}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {activeMenu === "technologies" && (
            <div className="grid lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-gradient-to-b from-brand/5 to-transparent p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Technologies</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Modern stack across frontend, backend, mobile, and cloud.</p>
                </div>
                <Link href="/technologies" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md w-fit transition-all hover:bg-brand/90">
                  Explore all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-x-8 gap-y-6 p-7">
                {[
                  { href: "/technologies/front-end", icon: "⚛", color: "bg-sky-100 text-sky-600", label: "Front-End", items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML/CSS"] },
                  { href: "/technologies/back-end", icon: "🟢", color: "bg-emerald-100 text-emerald-600", label: "Back-End", items: ["Node.js", "NestJS", "Python", "Express", ".NET", "GraphQL"] },
                  { href: "/technologies/database", icon: "🛢", color: "bg-indigo-100 text-indigo-600", label: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "SQLite"] },
                  // { href: "/technologies/ui-ux-design", icon: "❖", color: "bg-rose-100 text-rose-600", label: "UI/UX Design", items: ["Figma", "Adobe XD", "Photoshop", "Sketch", "Balsamiq"] },
                  { href: "/technologies/mobile", icon: "📱", color: "bg-blue-100 text-blue-600", label: "Mobile App", items: ["Flutter", "React Native", "Kotlin", "Android", "Swift"] },
                  { href: "/technologies/cloud-services", icon: "☁", color: "bg-amber-100 text-amber-600", label: "Cloud Services", items: ["AWS EC2", "AWS S3", "AWS Lambda", "Azure", "GCP"] },
                ].map((cat) => (
                  <div key={cat.href}>
                    <Link href={cat.href} onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${cat.color}`}>{cat.icon}</span>
                      {cat.label}
                    </Link>
                    <ul className="mt-3 space-y-1.5 pl-9">
                      {cat.items.map((item) => (
                        <li key={item}><Link href={cat.href} onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">{item}</Link></li>
                      ))}
                      <li><Link href={cat.href} onClick={() => setActiveMenu(null)} className="text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries */}
          {activeMenu === "industries" && (
            <div className="grid lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-gradient-to-b from-brand/5 to-transparent p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Industries</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Deep domain expertise across 12+ verticals.</p>
                </div>
                <Link href="/industries" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md w-fit transition-all hover:bg-brand/90">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-x-3 gap-y-2 p-5">
                {[
                  { href: "/industries/healthcare-medtech", Icon: HeartPulse, color: "bg-red-100 text-red-600", label: "Healthcare & MedTech", desc: "Patient portals, EMR, telehealth" },
                  { href: "/industries/fintech-banking", Icon: Landmark, color: "bg-blue-100 text-blue-600", label: "Fintech & Banking", desc: "Payments, lending, trading" },
                  { href: "/industries/ecommerce-retail", Icon: ShoppingBag, color: "bg-purple-100 text-purple-600", label: "E-commerce & Retail", desc: "Storefronts, inventory, checkout" },
                  { href: "/industries/education-edtech", Icon: GraduationCap, color: "bg-amber-100 text-amber-600", label: "Education & EdTech", desc: "LMS, assessments, classrooms" },
                  { href: "/industries/travel-hospitality", Icon: Plane, color: "bg-cyan-100 text-cyan-600", label: "Travel & Hospitality", desc: "Booking engines, hotel management" },
                  { href: "/industries/real-estate-proptech", Icon: Building2, color: "bg-emerald-100 text-emerald-600", label: "Real Estate & PropTech", desc: "Listings, CRM, virtual tours" },
                  { href: "/industries/logistics-supply-chain", Icon: Truck, color: "bg-orange-100 text-orange-600", label: "Logistics & Supply Chain", desc: "Fleet tracking, WMS, delivery" },
                  { href: "/industries/media-entertainment", Icon: Clapperboard, color: "bg-pink-100 text-pink-600", label: "Media & Entertainment", desc: "Streaming, CMS, OTT platforms" },
                  { href: "/industries/fitness-wellness", Icon: Dumbbell, color: "bg-teal-100 text-teal-600", label: "Fitness & Wellness", desc: "Workout apps, wearables" },
                  { href: "/industries/food-restaurant", Icon: UtensilsCrossed, color: "bg-rose-100 text-rose-600", label: "Food & Restaurant", desc: "Ordering, delivery, POS" },
                  { href: "/industries/manufacturing", Icon: Factory, color: "bg-slate-100 text-slate-600", label: "Manufacturing", desc: "ERP, IoT, production ops" },
                  { href: "/industries/on-demand-marketplace", Icon: Store, color: "bg-violet-100 text-violet-600", label: "On-Demand Marketplace", desc: "Multi-vendor, gig apps" },
                ].map(({ href, Icon, color, label, desc }) => (
                  <Link key={href} href={href} onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-white/40 hover:backdrop-blur-md">
                    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${color}`}><Icon className="h-4 w-4" /></span>
                    <div>
                      <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">{label}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Company */}
          {activeMenu === "company" && (
            <div className="grid lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-gradient-to-b from-brand/5 to-transparent p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Company</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A software agency built on craft and reliability.</p>
                </div>
                <Link href="/contact" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md w-fit transition-all hover:bg-brand/90">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                {[
                  { href: "/about", Icon: Users, color: "bg-blue-100 text-blue-600", label: "About Us", desc: "Our story, mission, and the team" },
                  { href: "/contact", Icon: UserPlus, color: "bg-orange-100 text-orange-600", label: "Hire Us", desc: "Bring our engineers onto your project" },
                  { href: "/careers", Icon: Briefcase, color: "bg-emerald-100 text-emerald-600", label: "Careers", desc: "Open roles. Join our team." },
                  { href: "/portfolio", Icon: LayoutGrid, color: "bg-purple-100 text-purple-600", label: "Portfolio", desc: "Case studies and work we're proud of" },
                  { href: "/blog", Icon: BookOpen, color: "bg-amber-100 text-amber-600", label: "Blog", desc: "Insights, tutorials, engineering articles" },
                  { href: "/contact", Icon: Mail, color: "bg-cyan-100 text-cyan-600", label: "Contact", desc: "Offices in Canada, India, and Ireland" },
                ].map(({ href, Icon, color, label, desc }) => (
                  <Link key={label} href={href} onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/40 hover:backdrop-blur-md">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color}`}><Icon className="h-4 w-4" /></span>
                    <div>
                      <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">{label}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn("max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 lg:hidden", mobileOpen ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-brand/5 hover:text-brand">Home</Link>
          {[
            { key: "services", label: "Services", href: "/services", items: [["Web Development", "/services/web-development"], ["Mobile App Development", "/services/mobile-app-development"], ["Software Development", "/services/software-development"], ["AI Development Services", "/services/ai-development-services"], ["AI Integration Services", "/services/ai-integration-services"], ["QA & Testing", "/services/qa-testing"], ["Data Analytics", "/services/data-analytics"], ["Dedicated Team", "/services/dedicated-development-team"], ["Staff Augmentation", "/services/staff-augmentation"]] },
            { key: "technologies", label: "Technologies", href: "/technologies", items: [["Front-End", "/technologies/front-end"], ["Back-End", "/technologies/back-end"], ["Database", "/technologies/database"], ["Mobile App", "/technologies/mobile"], ["Cloud Services", "/technologies/cloud-services"]] },
            { key: "industries", label: "Industries", href: "/industries", items: [["Healthcare & MedTech", "/industries/healthcare-medtech"], ["Fintech & Banking", "/industries/fintech-banking"], ["E-commerce & Retail", "/industries/ecommerce-retail"], ["Education & EdTech", "/industries/education-edtech"], ["Travel & Hospitality", "/industries/travel-hospitality"], ["Logistics", "/industries/logistics-supply-chain"], ["Fitness & Wellness", "/industries/fitness-wellness"], ["Food & Restaurant", "/industries/food-restaurant"]] },
            { key: "company", label: "Company", href: "/about", items: [["About Us", "/about"], ["Careers", "/careers"], ["Blog", "/blog"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]] },
          ].map(({ key, label, href, items }) => (
            <div key={key}>
              <button onClick={() => setMobileSubmenu(mobileSubmenu === key ? null : key)} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-brand/5 hover:text-brand cursor-pointer">
                <span>{label}</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === key && "rotate-180")} />
              </button>
              {mobileSubmenu === key && (
                <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3 space-y-0.5">
                  <Link href={href} onClick={() => setMobileOpen(false)} className="py-1 text-xs font-semibold text-brand">View all →</Link>
                  {items.map(([name, path]) => (
                    <Link key={path} href={path} onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">{name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-brand/5 hover:text-brand">Portfolio</Link>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white">Contact Us</Link>
          </div>
        </nav>
      </div>
    </header>
    </div>
    </>
  )
}
