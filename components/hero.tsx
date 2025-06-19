"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ParticlesBackground } from "./particles-background"
import { PolaroidImage } from "./polaroid-image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticlesBackground />

      {/* Main polaroid - positioned to complement the text layout */}
      <div className="absolute top-24 right-4 md:top-20 md:right-12 lg:top-16 lg:right-20 xl:right-32 hidden sm:block z-20">
        <PolaroidImage
          src="/profile.jpg?height=280&width=280"
          alt="Donald Brooks working on cloud infrastructure"
          caption="Building scalable solutions"
          className="w-44 md:w-48 lg:w-52"
          delay={1.0}
          rotation={-6}
        />
      </div>

      {/* Secondary accent polaroid for visual balance */}
      <div className="absolute bottom-28 left-4 md:left-12 lg:left-20 xl:left-32 hidden xl:block z-10">
        <motion.div
          initial={{ opacity: 0, rotate: 15, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 12, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            type: "spring",
            stiffness: 80,
            damping: 12,
          }}
          whileHover={{
            rotate: 8,
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="relative bg-card border border-border/20 transform transition-all duration-300 w-36"
          style={{
            padding: "0.5rem 0.5rem 2rem 0.5rem",
            borderRadius: "calc(var(--radius) + 2px)",
            boxShadow: `
              0 2px 4px -1px rgba(0, 0, 0, 0.04),
              0 4px 6px -1px rgba(0, 0, 0, 0.06)
            `,
          }}
        >
          <div
            className="relative w-full aspect-square overflow-hidden"
            style={{ borderRadius: "calc(var(--radius) - 2px)" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-primary text-lg mb-1">🏆</div>
                <span className="text-primary text-xs font-medium">AWS Certified Solutions Architect - Associate </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 right-2 text-center">
            <p className="text-muted-foreground text-xs">Achievement unlocked!</p>
          </div>

          {/* Mini tape effect */}
          <div
            className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-12 h-4 rounded-sm opacity-50"
            style={{
              background: "hsl(var(--muted))",
              boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.1)",
              transform: "translateX(-50%) rotate(-2deg)",
            }}
          />
        </motion.div>
      </div>

      {/* Main content with improved spacing */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-mono text-muted-foreground"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight"
            >
              Donald Brooks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-muted-foreground font-light"
            >
              Cloud Engineer
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable cloud solutions and love working with modern technologies. Currently focused on AWS,
            DevOps, and creating efficient infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="min-w-[140px]">
              <Link href="#projects">View Work</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="min-w-[140px]">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/brooksd" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/brooksdonald/" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:brooks@donaldbrooks.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile polaroid - refined for better mobile experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
          className="sm:hidden mt-12 flex justify-center"
        >
          <PolaroidImage
            src="/profile.jpg?height=200&width=200"
            alt="Donald Brooks - Cloud Engineer"
            caption="Ready to innovate!"
            className="w-40"
            delay={0}
            rotation={-4}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about">
            <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
