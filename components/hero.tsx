"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, ArrowUpRight, Cpu, Globe, Smartphone, Cloud, CheckCircle2, ShieldCheck, Zap, Sparkles, Terminal, Activity } from "lucide-react"

const AVATARS = ["/avatars/male1.png", "/avatars/female.png", "/avatars/male2.png"]
const ROTATING_WORDS = [
  "Web Platforms",
  "AI Infrastructures",
  "Mobile Products",
  "Cloud Solutions",
  "Enterprise Software"
]

const SHOWCASE_TABS = [
  {
    id: "web",
    label: "Web Platforms",
    icon: Globe,
    title: "Next-Gen Web Architecture",
    description: "High-speed, SEO-optimized web applications with edge rendering and seamless user flows.",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Global Edge Latency", value: "<35ms" },
      { label: "Core Web Vitals", value: "Passed" }
    ],
    codeSnippet: `// Ornitech Edge Deployment
export async function handleRequest(req) {
  const cache = await edgeStore.match(req);
  return cache || renderDynamicApp(req);
}`
  },
  {
    id: "ai",
    label: "AI & ML Systems",
    icon: Cpu,
    title: "Autonomous AI & LLM Agents",
    description: "Production-ready AI workflows, vector databases, RAG systems, and custom model integrations.",
    metrics: [
      { label: "Agent Response", value: "120ms" },
      { label: "Vector Search Accuracy", value: "99.4%" },
      { label: "Model Reliability", value: "99.9%" }
    ],
    codeSnippet: `// RAG + Vector Pipeline
const queryVector = await embedder.encode(prompt);
const context = await vectorDb.query({ vector: queryVector, topK: 5 });
const response = await aiAgent.generate({ prompt, context });`
  },
  {
    id: "mobile",
    label: "Mobile Ecosystems",
    icon: Smartphone,
    title: "Native & Cross-Platform Apps",
    description: "iOS and Android apps crafted with smooth 60fps animations and offline-first data sync.",
    metrics: [
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Crash-Free Rate", value: "99.95%" }
    ],
    codeSnippet: `// Offline-First Sync Engine
useOfflineSync({
  onOnline: () => syncPendingTransactions(),
  storage: EncryptedStorage,
});`
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    title: "Scalable Infrastructure & CI/CD",
    description: "Kubernetes clusters, serverless pipelines, zero-downtime deployments, and SOC2 security.",
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Deploy Time", value: "2.4 mins" },
      { label: "Security Standard", value: "SOC2 Type II" }
    ],
    codeSnippet: `// Terraform Infra Node
resource "aws_eks_cluster" "ornitech_prod" {
  name     = "ornitech-cluster-v2"
  role_arn = aws_iam_role.cluster.arn
}`
  }
]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("web")

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((v) => (v + 1) % ROTATING_WORDS.length)
        setVisible(true)
      }, 350)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const currentTab = SHOWCASE_TABS.find((t) => t.id === activeTab) || SHOWCASE_TABS[0]

  return (
    <section id="top" className="relative overflow-hidden bg-white text-slate-900 pt-8 pb-10 lg:min-h-screen lg:pb-24">
      {/* Background tech grid + subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 tech-grid-bg opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-transparent blur-3xl opacity-80" aria-hidden="true" />

      {/* Subtle watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -translate-y-1/2 select-none overflow-hidden" aria-hidden="true">
        <p className="text-center text-[18vw] font-black uppercase leading-none tracking-tighter text-slate-900/[0.02]">
          ORNITECH
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

        {/* Top Status & Social Proof Bar */}
        <div className="animate-blur-in flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 pb-6 pt-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Next-Gen Product Agency
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Available for Q3/Q4 Projects
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/#testimonials" className="glass-chip inline-flex items-center gap-3 rounded-full border border-white/90 px-3.5 py-1.5 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600">
              <div className="flex -space-x-2">
                {AVATARS.map((src, i) => (
                  <span key={i} className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" sizes="28px" />
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-700">4.9/5 · 600+ Products Delivered</span>
            </Link>
          </div>
        </div>

        {/* Hero Central Header */}
        <div className="mt-12 text-center lg:mt-16">
          <p className="animate-blur-in text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
            Software Development & Tech Architecture
          </p>

          <h1 className="animate-blur-in animation-delay-100 mt-4 text-[clamp(2rem,6.5vw,5.5rem)] font-black leading-[1.05] tracking-tight text-slate-900">
            We Engineer Digital Products &amp;
            <br />
            <span
              className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>

          <p className="animate-blur-in animation-delay-200 mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Ornitech is a premium software development studio. We design, architect, and ship production-grade platforms with high reliability, security, and velocity.
          </p>

          {/* Action CTAs */}
          <div className="animate-blur-in animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
            >
              Start Building
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 hover:border-slate-300 hover:text-blue-600"
            >
              Explore Works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Dynamic Interactive Technology Showcase Card */}
        <div className="animate-blur-in animation-delay-400 mt-14 lg:mt-16">
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-xl shadow-slate-200/50 backdrop-blur-md">

            {/* Showcase Tab Navigation */}
            <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex overflow-x-auto gap-2 scrollbar-hide pb-1 sm:pb-0 sm:flex-wrap sm:items-center">
                {SHOWCASE_TABS.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${isActive
                          ? "bg-white text-blue-600 shadow-sm border border-slate-200/80"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                        }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              <div className="hidden items-center gap-2 text-xs font-semibold text-slate-500 sm:flex">
                <Activity className="h-3.5 w-3.5 text-emerald-500" />
                Live Architecture Preview
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="grid gap-6 p-5 lg:grid-cols-12 lg:p-8">

              {/* Left Column: Info & Metrics */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-3 border border-blue-100">
                    <Zap className="h-3.5 w-3.5 text-blue-600" />
                    {currentTab.label} Capability
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {currentTab.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {currentTab.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
                  {currentTab.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-slate-50 p-2.5 border border-slate-100">
                      <p className="text-[10px] font-medium text-slate-500 leading-tight">{m.label}</p>
                      <p className="mt-1 text-sm font-black text-slate-900 sm:text-base">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Trust checks */}
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Dedicated Lead Architect
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-blue-500" /> Enterprise SLA
                  </span>
                </div>
              </div>

              {/* Right Column: Code & Interactive Wireframe Box */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl">

                  {/* Top Bar of Code Window */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400">ornitech-{currentTab.id}-engine.ts</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-mono text-emerald-400 border border-slate-800">
                      <Terminal className="h-3 w-3" />
                      <span>Status: Active</span>
                    </div>
                  </div>

                  {/* Code Editor Body */}
                  <pre className="mt-4 overflow-x-auto text-[11px] sm:text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-wrap break-words">
                    <code>{currentTab.codeSnippet}</code>
                  </pre>

                  {/* Visual Node Indicators */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-900/90 p-2.5 border border-slate-800">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Region: us-east-1 (Primary)</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-slate-900/90 p-2.5 border border-slate-800">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      <span>CI/CD: Automated Pipeline</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

