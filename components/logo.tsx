import Image from "next/image"
import { cn } from "@/lib/utils"
import styles from "./logo.module.css"

export function Logo({
  className,
  variant = "dark",
  footer = false,
}: {
  className?: string
  variant?: "dark" | "light"
  footer?: boolean
}) {
  return (
    <span className={cn(styles.logo, className)}>
      <Image
        src="/transparent.png"
        alt="Ornitech logo"
        width={200}
        height={56}
        className={cn(footer ? styles.imageFooter : styles.image, variant === "light" && styles.light)}
        priority
      />
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
