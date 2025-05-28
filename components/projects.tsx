"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Serverless Portfolio API",
      description:
        "A REST API built with AWS Lambda, API Gateway, and DynamoDB for managing portfolio content dynamically.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Python"],
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform modules for deploying scalable web applications on AWS with automated CI/CD pipelines.",
      tech: ["Terraform", "AWS", "GitHub Actions", "Docker"],
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Monitoring Dashboard",
      description:
        "Real-time monitoring solution using Grafana, Prometheus, and custom metrics for cloud infrastructure.",
      tech: ["Grafana", "Prometheus", "Docker", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with WebSocket connections, deployed on AWS ECS with auto-scaling capabilities.",
      tech: ["React", "Node.js", "WebSocket", "AWS ECS"],
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "CI/CD Pipeline",
      description:
        "Automated deployment pipeline for microservices using Jenkins, Docker, and Kubernetes orchestration.",
      tech: ["Jenkins", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com",
      demo: null,
    },
    {
      title: "Cost Optimization Tool",
      description: "Python script that analyzes AWS usage patterns and provides recommendations for cost optimization.",
      tech: ["Python", "AWS SDK", "CloudWatch", "Lambda"],
      github: "https://github.com",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in cloud engineering and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-lg font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
