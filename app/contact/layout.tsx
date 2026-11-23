import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Discuss Your Software Project",
  description:
    "Contact Ornitech in Surat, Gujarat to discuss a web, mobile, business software or AI project and request an estimate.",
  path: "/contact",
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
