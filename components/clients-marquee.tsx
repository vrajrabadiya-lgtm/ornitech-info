const CLIENTS = ["Masa", "Nextbite", "AT&T", "Biocon", "RetailHub", "PayFlow", "MedConnect", "Masa", "Nextbite", "AT&T", "Biocon", "RetailHub"]

export function ClientsMarquee() {
  return (
    <section className="glass-section relative overflow-hidden py-14" aria-label="Our clients">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-gradient animate-liquid-float-slow absolute left-1/4 top-0 h-[250px] w-[500px] opacity-30" />
        <div className="liquid-gradient animate-liquid-float absolute right-1/4 bottom-0 h-[200px] w-[400px] opacity-25" />
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <p className="relative mb-8 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground">
        Trusted by companies worldwide
      </p>

      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span
              key={i}
              className="glass-chip cursor-default rounded-2xl px-6 py-3 text-base font-bold text-foreground/60 transition-all duration-300 hover:scale-105 hover:text-brand"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
