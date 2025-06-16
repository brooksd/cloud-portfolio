"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PolaroidImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
  delay?: number
  rotation?: number
}

export function PolaroidImage({ src, alt, caption, className = "", delay = 0.8, rotation = -8 }: PolaroidImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotation - 3, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, rotate: rotation, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        rotate: rotation + 2,
        scale: 1.02,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`relative bg-card border border-border/20 transform transition-all duration-300 cursor-pointer ${className}`}
      style={{
        padding: "0.75rem 0.75rem 2.5rem 0.75rem",
        borderRadius: "calc(var(--radius) + 2px)",
        boxShadow: `
          0 4px 6px -1px rgba(0, 0, 0, 0.05),
          0 2px 4px -1px rgba(0, 0, 0, 0.03),
          0 10px 15px -3px rgba(0, 0, 0, 0.08)
        `,
        background: "hsl(var(--card))",
      }}
    >
      {/* Polaroid Image */}
      <div
        className="relative w-full aspect-square overflow-hidden bg-muted/30"
        style={{ borderRadius: "calc(var(--radius) - 2px)" }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          sizes="(max-width: 768px) 200px, 250px"
        />
        {/* Subtle overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.01) 100%)",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05)",
          }}
        />
      </div>

      {/* Polaroid Caption */}
      {caption && (
        <div className="absolute bottom-3 left-3 right-3 text-center">
          <p className="text-muted-foreground text-xs font-medium tracking-wide leading-relaxed">{caption}</p>
        </div>
      )}

      {/* Refined tape effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.4 }}
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 rounded-sm"
        style={{
          background: "linear-gradient(145deg, hsl(var(--muted)) 0%, hsl(var(--border)) 100%)",
          boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
          transform: "translateX(-50%) rotate(1deg)",
        }}
      />

      {/* Subtle corner details */}
      <div
        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-20"
        style={{ background: "hsl(var(--muted-foreground))" }}
      />
    </motion.div>
  )
}
