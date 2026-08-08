import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { ShieldCheck, Award, Globe, Users, HeartHandshake, Zap, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* About Hero */}
        <section className="relative border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              About Ornitech
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              We Partner with Visionaries to <span className="text-brand">Build Great Products</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ornitech is a modern software engineering agency specializing in custom web applications, mobile platforms, cloud systems, and AI integration. We help startups and global enterprises transform complex ideas into reliable digital products.
            </p>
          </div>
        </section>

        {/* Global Presence */}
        {/* <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Global Engineering <span className="text-brand">Footprint</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Operating across North America, Asia, and Europe to deliver round-the-clock development.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <span className="text-4xl">🇨🇦</span>
                <h3 className="mt-3 text-lg font-bold">Canada (HQ)</h3>
                <p className="mt-1 text-xs text-muted-foreground">106 Shaded Creek Dr, Kitchener, ON</p>
                <p className="mt-2 text-xs font-semibold text-brand">+1 (425) 623-4723</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <span className="text-4xl">🇮🇳</span>
                <h3 className="mt-3 text-lg font-bold">India (R&D Center)</h3>
                <p className="mt-1 text-xs text-muted-foreground">Pragati IT Park, Utran, Surat, Gujarat</p>
                <p className="mt-2 text-xs font-semibold text-brand">+91 97275 72204</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <span className="text-4xl">🇮🇪</span>
                <h3 className="mt-3 text-lg font-bold">Ireland Office</h3>
                <p className="mt-1 text-xs text-muted-foreground">Clondalkin, Co. Dublin, D22 T6P8</p>
                <p className="mt-2 text-xs font-semibold text-brand">+353 89 612 9175</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Core Values */}
        <section className="border-t border-border/50 bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Core <span className="text-brand">Engineering Values</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <Zap className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-bold text-foreground">Speed & Quality</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Sprint fast without compromising code architecture or security standards.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <ShieldCheck className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-bold text-foreground">100% IP Ownership</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  You retain full ownership of all source code, assets, and documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <HeartHandshake className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-bold text-foreground">Radical Transparency</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Direct Slack access, daily standups, and clear sprint demo milestones.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <Users className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-bold text-foreground">Dedicated Teams</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Vetted senior engineers hand-picked for your product domain requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
