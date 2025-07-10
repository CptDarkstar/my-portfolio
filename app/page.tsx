"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            Dev<span className="text-primary">Portfolio</span>
          </Link>
        </h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20" aria-hidden="true">
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I am <span className="text-primary">Eckhardt Van Der Poel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend Developer specializing in React & Next.js
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/TLR-25.png" alt="Profile" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I am a passionate frontend developer with a strong foundation in modern web technologies. I enjoy building
              responsive, user-friendly interfaces and solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg">
              When I am not coding, you can find me exploring new technologies, working on personal projects, or
              enjoying outdoor activities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <SkillCard name="HTML5" icon="/html5.png" certificateUrl="/certificates/html-certificate.jpg" />
            <SkillCard name="CSS3" icon="/css.png" certificateUrl="/certificates/html-certificate.jpg" />
            <SkillCard name="JavaScript" icon="/javascript.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="TypeScript" icon="/typescript.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="Svelte" icon="/svelte.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="React" icon="/react.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="Firebase" icon="/firebase.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="Node.js" icon="/nodejs.png" certificateUrl="/certificates/coming soon.png" />
            <SkillCard name="GitHub" icon="/github.png" certificateUrl="/certificates/coming soon.png" />
            {/* Space for future skills */}
            <div className="col-span-2 md:col-span-3 lg:col-span-5 mt-6">
              <p className="text-center text-muted-foreground">More skills coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Shareholder Voting App for AGMs"
              description="A modern, secure web application designed specifically for businesses to manage shareholder voting during Annual General Meetings (AGMs)."
              image="/pro1.png?height=200&width=400"
              tags={["Svelte", "Firebase", "SMUI", "JavaScript", "Node.js"]}
              githubUrl="https://github.com/CptDarkstar/agm-demo"
              liveUrl="https://agm-demo.vercel.app"
            />
            <ProjectCard
              title="Landing Page for a Bond Orginator"
              description="A modern, responsive landing page for a bond orginator."
              image="/pro2.png?height=200&width=400"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"]}
              githubUrl="https://github.com/CptDarkstar/home-loan-process"
              liveUrl="https://home-loan-process.vercel.app"
            />
            <ProjectCard
              title="Project Three"
              description="A mobile-first e-commerce website"
              image="/placeholder.svg?height=200&width=400"
              tags={["HTML", "CSS", "JavaScript"]}
              githubUrl="#"
              liveUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto flex flex-col gap-6">
            <Button className="flex items-center gap-2" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                cpt.darkstar1@gmail.com
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://github.com/CptDarkstar/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({
  name,
  icon,
  certificateUrl,
}: {
  name: string
  icon: string
  certificateUrl: string
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Card
        className="text-center hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <CardHeader>
          <div className="relative w-16 h-16 mx-auto mb-2 transition-transform duration-300 transform group-hover:scale-110">
            <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{name} Certificate</DialogTitle>
            <DialogDescription>My certification for {name} skills and knowledge.</DialogDescription>
          </DialogHeader>
          <div className="relative w-full h-[70vh] mt-4">
            <Image
              src={certificateUrl || "/placeholder.svg"}
              alt={`${name} Certificate`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 70vw"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="outline" asChild className="mr-2">
              <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Size
              </a>
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex gap-4">
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

