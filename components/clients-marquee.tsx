const CLIENTS = ["masa", "nextbite", "AT&T", "Biocon", "masa", "nextbite", "AT&T", "Biocon"]

export function ClientsMarquee() {
  return (
    <section className="bg-brand py-8" aria-label="Our clients">
      <p className="mb-6 text-center text-xs font-semibold tracking-[0.3em] text-brand-foreground/70">OUR CLIENTS</p>
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-brand-foreground/80 transition-all duration-200 hover:text-brand-foreground hover:scale-110 cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
