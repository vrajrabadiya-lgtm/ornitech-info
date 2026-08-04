import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string
  variant?: "dark" | "light"
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none", className)}>
      {/* Company logo image */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt="Ornitech logo"
          width={36}
          height={36}
          className="h-full w-full object-contain"
          priority
        />
      </span>

      {/* Brand name */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[19px] font-extrabold tracking-tight",
            variant === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          Orni<span className="text-brand">T</span>ech
        </span>
        <span
          className={cn(
            "mt-0.5 text-[8px] font-semibold tracking-[0.3em] uppercase",
            variant === "light" ? "text-ink-foreground/50" : "text-muted-foreground",
          )}
        >
          —ORNITECH—
        </span>
      </span>
    </span>
  )
}

export function MarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 25V10l7 9 6-7 6 7 7-9v15"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
