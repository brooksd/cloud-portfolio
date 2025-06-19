"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Code, Cloud } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Graduate",
      description: "Recent graduate with focus on cloud computing and distributed systems",
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "AWS Cloud Practitioner with hands-on experience in cloud services",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies and cloud-native development",
    },
    {
      icon: Cloud,
      title: "DevOps Enthusiast",
      description: "Passionate about automation, CI/CD, and infrastructure as code",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate cloud engineer who loves building scalable solutions and learning new technologies
            every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              As a recent Computer Science graduate, I've discovered my passion for cloud computing and DevOps
              practices. I enjoy the challenge of designing efficient, scalable systems and the satisfaction of seeing
              them work seamlessly in production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new AWS services, contributing to open-source projects, or
              learning about the latest trends in cloud architecture. I believe in continuous learning and staying
              curious about emerging technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently seeking opportunities to grow as a cloud engineer and contribute to innovative projects that
              make a real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 mb-4 text-primary" />
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
