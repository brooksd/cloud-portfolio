"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Go"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Git"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      title: "Web Technologies",
      skills: ["React", "Next.js", "Node.js", "Express", "REST APIs"],
    },
    {
      title: "Monitoring",
      skills: ["CloudWatch", "Grafana", "Prometheus", "ELK Stack"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with and tools I use to build modern cloud solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
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
