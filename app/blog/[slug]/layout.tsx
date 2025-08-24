import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Article | Luxe Blog",
  description: "Read our latest articles and insights",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
