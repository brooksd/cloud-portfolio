"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: You can do something with the container when it's loaded
  }, [])

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#94a3b8",
          },
          links: {
            color: "#94a3b8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
