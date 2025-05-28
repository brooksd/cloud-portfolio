import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Chen - Junior Cloud Engineer",
  description:
    "Portfolio of Alex Chen, a passionate junior cloud engineer specializing in AWS, DevOps, and modern web technologies.",
  keywords: ["cloud engineer", "AWS", "DevOps", "portfolio", "junior developer", "infrastructure"],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    title: "Alex Chen - Junior Cloud Engineer",
    description: "Portfolio showcasing cloud engineering projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}