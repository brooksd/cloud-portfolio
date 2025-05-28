import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Cloud,
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Star,
  ArrowRight,
  Calendar,
  Eye,
  BookOpen,
  Target,
  Lightbulb,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JuniorCloudPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <span className="hidden font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:inline-block">
                Donald Brooks
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-blue-600">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600">
                Projects
              </Link>
              <Link href="#learning" className="transition-colors hover:text-blue-600">
                Learning
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-20 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-white/50 px-3 py-1 text-sm">
                <Rocket className="mr-2 h-4 w-4 text-blue-500" />
                Open to new opportunities
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Donald Brooks
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-gray-700">Junior Cloud Engineer</p>
                <p className="text-lg text-gray-600">Building Tomorrow's Cloud Solutions Today ☁️</p>
              </div>
            </div>
            <p className="max-w-[600px] text-lg text-gray-600 leading-relaxed">
              Passionate about cloud technologies and eager to make an impact. Recent computer science graduate with
              hands-on experience in AWS, Azure, and modern DevOps practices. Ready to contribute to innovative cloud
              solutions and grow with a dynamic team.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">5</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="#projects">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  See My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-blue-50" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                <Link href="mailto:jordan@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Jordan Smith"
                  width={500}
                  height={500}
                  className="rounded-full border-8 border-white shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600">Driven by curiosity, powered by passion</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                As a recent Computer Science graduate with a specialization in cloud computing, I'm excited to begin my
                journey in the cloud engineering field. During my studies and internships, I've gained hands-on
                experience with AWS, Azure, and modern DevOps practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about learning new technologies, solving complex problems, and building scalable
                solutions. My goal is to contribute to innovative cloud projects while continuously expanding my skills
                and knowledge in this rapidly evolving field.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding or studying for certifications, you can find me contributing to open-source
                projects, attending tech meetups, or experimenting with the latest cloud services and tools.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Computer Science Degree</h3>
                      <p className="text-gray-600">University of Technology, 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-purple-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AWS Cloud Practitioner</h3>
                      <p className="text-gray-600">Certified 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-indigo-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Growth Mindset</h3>
                      <p className="text-gray-600">Always learning, always improving</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-24 bg-white/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600">Technologies I'm proficient in and actively learning</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Cloud Platforms */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  Cloud Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">AWS</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Microsoft Azure</span>
                    <span className="text-sm text-gray-600">Beginner</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Google Cloud</span>
                    <span className="text-sm text-gray-600">Learning</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    DigitalOcean
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Heroku
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Programming Languages */}
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-2">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Python</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">JavaScript</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Java</span>
                    <span className="text-sm text-gray-600">Beginner</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Bash
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    SQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* DevOps & Tools */}
            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-2">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  DevOps & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Docker</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Git/GitHub</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Terraform</span>
                    <span className="text-sm text-gray-600">Learning</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    GitHub Actions
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    Jenkins
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    Linux
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Technologies */}
            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-2">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  Web Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700 border-green-200">React</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Node.js</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Express</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">HTML/CSS</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">REST APIs</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">MongoDB</Badge>
                  <Badge className="bg-green-100 text-green-700 border-green-200">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  Databases & Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">MySQL</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">PostgreSQL</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">MongoDB</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">Redis</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">AWS S3</Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">DynamoDB</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Learning & Certifications */}
            <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-2">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-700 border-red-200">Kubernetes</Badge>
                  <Badge className="bg-red-100 text-red-700 border-red-200">AWS SAA</Badge>
                  <Badge className="bg-red-100 text-red-700 border-red-200">Microservices</Badge>
                  <Badge className="bg-red-100 text-red-700 border-red-200">CI/CD</Badge>
                  <Badge className="bg-red-100 text-red-700 border-red-200">Monitoring</Badge>
                  <Badge className="bg-red-100 text-red-700 border-red-200">Security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">Personal and academic projects showcasing my cloud skills</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Personal Cloud Portfolio"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cloud-Native Portfolio Website</CardTitle>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">New</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    Built a serverless portfolio website using AWS services including S3, CloudFront, Lambda, and Route
                    53. Implemented CI/CD pipeline with GitHub Actions for automated deployments.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>100% serverless architecture</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span>99.9% uptime achieved</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Target className="h-4 w-4 text-blue-500" />
                      <span>Automated CI/CD pipeline</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      AWS S3
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      CloudFront
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      GitHub Actions
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Site
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Weather App with AWS"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  API
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-xl">Serverless Weather Dashboard</CardTitle>
                  <CardDescription className="text-gray-600">
                    Created a real-time weather dashboard using AWS Lambda, API Gateway, and DynamoDB. Features
                    location-based weather data, historical trends, and responsive design.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Database className="h-4 w-4 text-orange-500" />
                      <span>Real-time data processing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Secure API endpoints</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>Mobile-responsive design</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-purple-200 text-purple-700">
                      AWS Lambda
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700">
                      API Gateway
                    </Badge>
                    <Badge variant="outline" className="border-purple-200 text-purple-700">
                      React
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Docker Learning Project"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  DevOps
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-xl">Containerized Microservices App</CardTitle>
                  <CardDescription className="text-gray-600">
                    Developed a multi-service application using Docker containers, featuring a React frontend, Node.js
                    API, and PostgreSQL database with Docker Compose orchestration.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Server className="h-4 w-4 text-blue-500" />
                      <span>Multi-container architecture</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Docker Compose orchestration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Database className="h-4 w-4 text-green-500" />
                      <span>Persistent data storage</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      PostgreSQL
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Infrastructure as Code"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  IaC
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-xl">Terraform AWS Infrastructure</CardTitle>
                  <CardDescription className="text-gray-600">
                    Learning project to deploy AWS infrastructure using Terraform. Includes VPC, EC2 instances, load
                    balancers, and security groups with modular, reusable code structure.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Code className="h-4 w-4 text-purple-500" />
                      <span>Infrastructure as Code</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-red-500" />
                      <span>Security best practices</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Rocket className="h-4 w-4 text-blue-500" />
                      <span>Modular design</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      Terraform
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      AWS VPC
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      EC2
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Chat Application"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Full-Stack
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-xl">Real-time Chat Application</CardTitle>
                  <CardDescription className="text-gray-600">
                    Built a real-time chat application using React, Node.js, and Socket.io. Deployed on AWS EC2 with
                    MongoDB Atlas for data persistence and Redis for session management.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Real-time messaging</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>Multi-user support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Database className="h-4 w-4 text-green-500" />
                      <span>Persistent chat history</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      Socket.io
                    </Badge>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                      AWS EC2
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Monitoring Dashboard"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Monitoring
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <CardTitle className="text-xl">System Monitoring Dashboard</CardTitle>
                  <CardDescription className="text-gray-600">
                    Created a monitoring dashboard using Grafana and Prometheus to track system metrics, application
                    performance, and resource utilization with custom alerts and notifications.
                  </CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span>Real-time monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span>Performance metrics</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Custom alerts</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      Grafana
                    </Badge>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      Prometheus
                    </Badge>
                    <Badge variant="outline" className="border-orange-200 text-orange-700">
                      Docker
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      asChild
                    >
                      <Link href="https://demo.example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 hover:bg-blue-50" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning" className="container px-4 py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Journey & Growth
            </h2>
            <p className="text-xl text-gray-600">Continuous learning and skill development in cloud technologies</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Certification 1 */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Completed</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AWS Cloud Practitioner</CardTitle>
                    <CardDescription>Foundation level AWS certification</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Gained fundamental understanding of AWS services, pricing, and cloud concepts. This certification
                  provided the foundation for my cloud journey.
                </p>
              </CardContent>
            </Card>

            {/* Course 1 */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">Completed</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Docker & Kubernetes Course</CardTitle>
                    <CardDescription>Container orchestration mastery</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Comprehensive course covering containerization, Docker best practices, and Kubernetes fundamentals.
                  Applied knowledge in multiple hands-on projects.
                </p>
              </CardContent>
            </Card>

            {/* Current Learning */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">In Progress</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AWS Solutions Architect</CardTitle>
                    <CardDescription>Associate level certification prep</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Currently studying for AWS Solutions Architect Associate certification. Focusing on advanced
                  architectural patterns and best practices.
                </p>
                <Progress value={75} className="h-2" />
              </CardContent>
            </Card>

            {/* Blog Learning */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Ongoing</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>Weekly</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tech Blog Writing</CardTitle>
                    <CardDescription>Sharing knowledge and learning</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Writing technical blog posts about my learning journey, project experiences, and cloud concepts. Helps
                  reinforce learning and share knowledge.
                </p>
              </CardContent>
            </Card>

            {/* Open Source */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">Active</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-3">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Open Source Contributions</CardTitle>
                    <CardDescription>Contributing to cloud projects</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Actively contributing to open-source cloud tools and documentation. Great way to learn from
                  experienced developers and give back to the community.
                </p>
              </CardContent>
            </Card>

            {/* Future Goals */}
            <Card className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Goal</Badge>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>2025</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Multi-Cloud Expertise</CardTitle>
                    <CardDescription>Azure and GCP certifications</CardDescription>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Planning to achieve Azure Fundamentals and Google Cloud Associate certifications to become proficient
                  across all major cloud platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect and Grow Together
            </h2>
            <p className="text-xl text-gray-600">
              Excited to discuss opportunities, collaborate on projects, or share learning experiences!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                <p className="text-lg text-gray-600">
                  I'm always eager to connect with fellow developers, learn from experienced professionals, and explore
                  new opportunities in cloud engineering. Whether you have a project idea, mentorship opportunity, or
                  just want to chat about cloud technologies, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-gray-600">jordan.smith@example.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-purple-50 to-indigo-50 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-indigo-50 to-blue-50 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-gray-600">Austin, TX</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Connect With Me</h4>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    asChild
                  >
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 bg-white shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-lg">
                  I'll get back to you within 24 hours. Looking forward to connecting!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </Label>
                      <Input id="first-name" placeholder="John" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input id="last-name" placeholder="Doe" className="h-12" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </Label>
                    <Input id="company" placeholder="Your Company" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input id="subject" placeholder="Collaboration Opportunity" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Hi Jordan! I'd love to connect and discuss potential opportunities or collaboration ideas."
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jordan Smith
                </span>
              </div>
              <p className="text-gray-600">
                Junior Cloud Engineer passionate about learning, growing, and building innovative cloud solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="#skills" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
                <Link href="#learning" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Learning
                </Link>
                <Link href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Interests</h4>
              <div className="space-y-2">
                <p className="text-gray-600">Cloud Architecture</p>
                <p className="text-gray-600">DevOps Practices</p>
                <p className="text-gray-600">Open Source</p>
                <p className="text-gray-600">Continuous Learning</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-100" asChild>
                  <Link href="mailto:jordan@example.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-gray-600">© {new Date().getFullYear()} Jordan Smith. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
