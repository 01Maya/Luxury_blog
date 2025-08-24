import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Luxe Blog",
  description: "Explore our collection of premium articles and insights",
}

export default function BlogRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
