"use client"

import { useState } from "react"
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

  return (
    <header 
      className="relative sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Ornitech home" onMouseEnter={() => setActiveMenu(null)}>
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {/* Services */}
          <li onMouseEnter={() => setActiveMenu("services")}>
            <Link
              href="/services"
              className={cn(
                "flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand",
                activeMenu === "services" ? "text-brand font-semibold" : "text-foreground/80"
              )}
            >
              Services
              <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", activeMenu === "services" && "rotate-180 text-brand")} />
            </Link>
          </li>

          {/* Technologies */}
          <li onMouseEnter={() => setActiveMenu("technologies")}>
            <Link
              href="/technologies"
              className={cn(
                "flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand",
                activeMenu === "technologies" ? "text-brand font-semibold" : "text-foreground/80"
              )}
            >
              Technologies
              <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", activeMenu === "technologies" && "rotate-180 text-brand")} />
            </Link>
          </li>

          {/* Industries */}
          <li onMouseEnter={() => setActiveMenu("industries")}>
            <Link
              href="/industries"
              className={cn(
                "flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand",
                activeMenu === "industries" ? "text-brand font-semibold" : "text-foreground/80"
              )}
            >
              Industries
              <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", activeMenu === "industries" && "rotate-180 text-brand")} />
            </Link>
          </li>

          {/* Portfolio */}
          <li onMouseEnter={() => setActiveMenu(null)}>
            <Link
              href="/portfolio"
              className="flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              Portfolio
            </Link>
          </li>

          {/* Company */}
          <li onMouseEnter={() => setActiveMenu("company")}>
            <Link
              href="/about"
              className={cn(
                "flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors hover:text-brand",
                activeMenu === "company" ? "text-brand font-semibold" : "text-foreground/80"
              )}
            >
              Company
              <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", activeMenu === "company" && "rotate-180 text-brand")} />
            </Link>
          </li>
        </ul>

        {/* Right CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex" onMouseEnter={() => setActiveMenu(null)}>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Hire Us
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* SINGLE ABSOLUTE CENTERED MEGA-MENU CONTAINER (Anchored to Header Center) */}
      <div
        className={cn(
          "absolute left-1/2 top-[74px] z-50 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-all duration-200",
          activeMenu !== null ? "visible opacity-100 translate-y-0 pointer-events-auto" : "invisible opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl">
          {/* Services Card */}
          {activeMenu === "services" && (
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-muted/40 p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Services</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Full-stack delivery across mobile, web, software, design, data, and cloud. A single partner for every layer of your product.
                  </p>
                </div>
                <Link
                  href="/services"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:bg-brand/90 w-fit"
                >
                  Explore all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 p-5">
                <Link href="/services/web-development" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/5 font-mono text-xs font-bold text-foreground">N</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Web Development</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Fast, SEO-ready web platforms.</span>
                  </div>
                </Link>

                <Link href="/services/mobile-app-development" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 font-bold text-blue-600 text-xs">F</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Mobile App Development</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Native & cross-platform iOS and Android.</span>
                  </div>
                </Link>

                <Link href="/services/software-development" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 font-bold text-indigo-600 text-xs">TS</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Software Development</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Custom, scalable software end to end.</span>
                  </div>
                </Link>

                <Link href="/services/vibe-coding-development" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 font-bold text-purple-600 text-xs">V</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Vibe Coding Development</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Ship faster with AI-assisted development.</span>
                  </div>
                </Link>

                <Link href="/services/ai-development-services" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 font-bold text-violet-600 text-xs">AI</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">AI Development Services</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Build intelligent AI-powered products.</span>
                  </div>
                </Link>

                <Link href="/services/ai-integration-services" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 font-bold text-amber-600 text-xs">🤖</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">AI Integration Services</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Layer intelligence onto what you run.</span>
                  </div>
                </Link>

                <Link href="/services/ui-ux-design" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 font-bold text-rose-600 text-xs">🎨</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">UI/UX Design</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Research-led, conversion-focused design.</span>
                  </div>
                </Link>

                <Link href="/services/qa-testing" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-bold text-emerald-600 text-xs">Q</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">QA & Testing Services</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Ship with confidence, every release.</span>
                  </div>
                </Link>

                <Link href="/services/cloud-devops-security" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 font-bold text-amber-600 text-xs">☁️</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Cloud, DevOps & Security</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Resilient infra, automated delivery.</span>
                  </div>
                </Link>

                <Link href="/services/data-analytics" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 font-bold text-orange-600 text-xs">📊</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Data Analytics</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Turn raw data into decisions.</span>
                  </div>
                </Link>

                <Link href="/services/dedicated-development-team" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 font-bold text-sky-600 text-xs">D</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Dedicated Development Team</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">A full team, exclusively yours.</span>
                  </div>
                </Link>

                <Link href="/services/staff-augmentation" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-bold text-emerald-600 text-xs">S</span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Staff Augmentation</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Extend your team on demand.</span>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Technologies Card */}
          {activeMenu === "technologies" && (
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-muted/40 p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Technologies</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Empowering innovation with modern technologies across frontend, backend, mobile, and cloud, built to scale and adapt to your business.
                  </p>
                </div>
                <Link
                  href="/technologies"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:bg-brand/90 w-fit"
                >
                  Explore all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-x-8 gap-y-6 p-7">
                <div>
                  <Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 font-bold text-xs">⚛</span> Front-End
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">React</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Angular</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Vue.js</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Next.js</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">.NET</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">HTML/CSS</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">TypeScript</Link></li>
                    <li><Link href="/technologies/front-end" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>

                <div>
                  <Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs">🟢</span> Back-End
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Node.Js</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">NestJS</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Python</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Express</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">.NET</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">GraphQL</Link></li>
                    <li><Link href="/technologies/back-end" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>

                <div>
                  <Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 font-bold text-xs">🛢</span> Database
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">PostgreSQL</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">MongoDB</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">MySQL</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Firebase</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">SQLite</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Supabase</Link></li>
                    <li><Link href="/technologies/database" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>

                <div>
                  <Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 font-bold text-xs">❖</span> UI/UX Design
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Figma</Link></li>
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Adobe XD</Link></li>
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Photoshop</Link></li>
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Sketch</Link></li>
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Balsamiq</Link></li>
                    <li><Link href="/technologies/ui-ux-design" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>

                <div>
                  <Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs">📱</span> Mobile App
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Flutter</Link></li>
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">React Native</Link></li>
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Kotlin</Link></li>
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Android</Link></li>
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Swift</Link></li>
                    <li><Link href="/technologies/mobile" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>

                <div>
                  <Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 font-bold text-xs">☁</span> Cloud Services
                  </Link>
                  <ul className="mt-3 space-y-2 pl-[36px]">
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">AWS EC2</Link></li>
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">AWS S3</Link></li>
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">AWS Lambda</Link></li>
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">Microsoft Azure</Link></li>
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="text-xs text-muted-foreground hover:text-brand">GCP</Link></li>
                    <li><Link href="/technologies/cloud-services" onClick={() => setActiveMenu(null)} className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">View All →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Industries Card */}
          {activeMenu === "industries" && (
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-muted/40 p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Industries</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Deep domain expertise across 12+ verticals. Software solutions shaped around how your industry actually works.
                  </p>
                </div>
                <Link
                  href="/industries"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:bg-brand/90 w-fit"
                >
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-x-3 gap-y-2 p-5">
                <Link href="/industries/healthcare-medtech" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Healthcare & MedTech</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Patient portals, EMR, telehealth</span>
                  </div>
                </Link>

                <Link href="/industries/fintech-banking" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Landmark className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Fintech & Banking</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Payments, lending, trading platforms</span>
                  </div>
                </Link>

                <Link href="/industries/ecommerce-retail" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <ShoppingBag className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">E-commerce & Retail</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Storefronts, inventory, checkout</span>
                  </div>
                </Link>

                <Link href="/industries/education-edtech" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Education & EdTech</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">LMS, assessments, virtual classrooms</span>
                  </div>
                </Link>

                <Link href="/industries/travel-hospitality" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Plane className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Travel & Hospitality</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Booking engines, OTA, hotel management</span>
                  </div>
                </Link>

                <Link href="/industries/real-estate-proptech" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Real Estate & PropTech</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Listings, CRM, virtual tours</span>
                  </div>
                </Link>

                <Link href="/industries/logistics-supply-chain" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <Truck className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Logistics & Supply Chain</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Fleet tracking, WMS, last-mile delivery</span>
                  </div>
                </Link>

                <Link href="/industries/media-entertainment" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                    <Clapperboard className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Media & Entertainment</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Streaming, CMS, OTT platforms</span>
                  </div>
                </Link>

                <Link href="/industries/fitness-wellness" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                    <Dumbbell className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Fitness & Wellness</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Workout apps, wearables, nutrition</span>
                  </div>
                </Link>

                <Link href="/industries/food-restaurant" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                    <UtensilsCrossed className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Food & Restaurant</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Online ordering, delivery, POS systems</span>
                  </div>
                </Link>

                <Link href="/industries/manufacturing" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-500/10 text-slate-500">
                    <Factory className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Manufacturing</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">ERP, IoT integration, production ops</span>
                  </div>
                </Link>

                <Link href="/industries/on-demand-marketplace" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                    <Store className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">On-Demand Marketplace</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">Multi-vendor, gig, and delivery apps</span>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Company Card */}
          {activeMenu === "company" && (
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
              <div className="flex flex-col justify-between gap-6 bg-muted/40 p-7">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Company</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A software agency built on craft and reliability, partnering with startups and enterprises since day one.
                  </p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground shadow-md transition-all hover:bg-brand/90 w-fit"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 p-6">
                <Link href="/about" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">About Us</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Our story, mission, and the team behind the work</span>
                  </div>
                </Link>

                <Link href="/contact" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <UserPlus className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Hire Us</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Bring our engineers and designers onto your project</span>
                  </div>
                </Link>

                <Link href="/careers" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Careers</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Open roles. Join a team that ships great software.</span>
                  </div>
                </Link>

                <Link href="/portfolio" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <LayoutGrid className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Portfolio</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Case studies and work we are proud of</span>
                  </div>
                </Link>

                <Link href="/blog" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Blog</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Insights, tutorials, and engineering articles</span>
                  </div>
                </Link>

                <Link href="/contact" onClick={() => setActiveMenu(null)} className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-brand">Contact</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">Talk to us. Offices in Canada, India, and Ireland.</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={cn("border-t border-border bg-background lg:hidden", mobileOpen ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">
            Home
          </Link>

          <div>
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <span>Services</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "services" && "rotate-180")} />
            </button>
            {mobileSubmenu === "services" && (
              <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3 space-y-1">
                <Link href="/services" onClick={() => setMobileOpen(false)} className="py-1 text-xs font-semibold text-brand">
                  Explore all Services →
                </Link>
                <Link href="/services/web-development" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Web Development</Link>
                <Link href="/services/mobile-app-development" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Mobile App Development</Link>
                <Link href="/services/software-development" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Software Development</Link>
                <Link href="/services/vibe-coding-development" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Vibe Coding Development</Link>
                <Link href="/services/ai-development-services" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">AI Development Services</Link>
                <Link href="/services/ai-integration-services" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">AI Integration Services</Link>
                <Link href="/services/ui-ux-design" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">UI/UX Design</Link>
                <Link href="/services/qa-testing" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">QA & Testing Services</Link>
                <Link href="/services/cloud-devops-security" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Cloud, DevOps & Security</Link>
                <Link href="/services/data-analytics" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Data Analytics</Link>
                <Link href="/services/dedicated-development-team" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Dedicated Development Team</Link>
                <Link href="/services/staff-augmentation" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Staff Augmentation</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === "technologies" ? null : "technologies")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <span>Technologies</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "technologies" && "rotate-180")} />
            </button>
            {mobileSubmenu === "technologies" && (
              <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3 space-y-1">
                <Link href="/technologies" onClick={() => setMobileOpen(false)} className="py-1 text-xs font-semibold text-brand">
                  Explore all Technologies →
                </Link>
                <Link href="/technologies/front-end" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Front-End</Link>
                <Link href="/technologies/back-end" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Back-End</Link>
                <Link href="/technologies/database" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Database</Link>
                <Link href="/technologies/ui-ux-design" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">UI/UX Design</Link>
                <Link href="/technologies/mobile" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Mobile App</Link>
                <Link href="/technologies/cloud-services" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Cloud Services</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === "industries" ? null : "industries")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <span>Industries</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "industries" && "rotate-180")} />
            </button>
            {mobileSubmenu === "industries" && (
              <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3 space-y-1">
                <Link href="/industries" onClick={() => setMobileOpen(false)} className="py-1 text-xs font-semibold text-brand">
                  View all Industries →
                </Link>
                <Link href="/industries/healthcare-medtech" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Healthcare & MedTech</Link>
                <Link href="/industries/fintech-banking" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Fintech & Banking</Link>
                <Link href="/industries/ecommerce-retail" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">E-commerce & Retail</Link>
                <Link href="/industries/education-edtech" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Education & EdTech</Link>
                <Link href="/industries/travel-hospitality" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Travel & Hospitality</Link>
                <Link href="/industries/real-estate-proptech" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Real Estate & PropTech</Link>
                <Link href="/industries/logistics-supply-chain" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Logistics & Supply Chain</Link>
                <Link href="/industries/media-entertainment" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Media & Entertainment</Link>
                <Link href="/industries/fitness-wellness" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Fitness & Wellness</Link>
                <Link href="/industries/food-restaurant" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Food & Restaurant</Link>
                <Link href="/industries/manufacturing" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Manufacturing</Link>
                <Link href="/industries/on-demand-marketplace" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">On-Demand Marketplace</Link>
              </div>
            )}
          </div>

          <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">
            Portfolio
          </Link>

          <div>
            <button
              onClick={() => setMobileSubmenu(mobileSubmenu === "company" ? null : "company")}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <span>Company</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubmenu === "company" && "rotate-180")} />
            </button>
            {mobileSubmenu === "company" && (
              <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3 space-y-1">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">About Us</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Hire Us</Link>
                <Link href="/careers" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Careers</Link>
                <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Portfolio</Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-foreground">Contact</Link>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2 pt-2 border-t border-border">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-brand-foreground"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
