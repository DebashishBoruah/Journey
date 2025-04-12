"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { projects } from "@/public/data/data"
import { useState } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredProjects = activeCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === activeCategory)
  
  const featuredProjects = filteredProjects.slice(0, 6)
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero section remains the same */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          {/* Existing hero section code */}
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
  A Glimpse Into My Creative Journey
</h1>
<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
  Here’s a collection of the apps, websites, and design projects I’ve built over time — each crafted with a focus on real-world impact, innovation, and clean execution.
</p>

                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
  <Link href="/portfolio">
    <Button className="px-8">
      View My Work
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
  <Link href="mailto:debashishboruah54@gmail.com">
    <Button variant="outline" className="px-8">
      Get in Touch
    </Button>
  </Link>
</div>

              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/assets/Homescreen.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured projects section - now with limited projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore my latest work across different categories
                </p>
              </div>
            </div>

            {/* Display only up to 6 projects */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10 py-20">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  category={project.category}
                  imageSrc={project.imageSrc}
                  slug={project.slug}
                  status={project.status}
                />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/portfolio">
                <Button variant="outline" className="gap-1">
                  View All Projects
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Design Transformations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See the before and after of our design process
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <BeforeAfterSlider
                  beforeImage="/placeholder.svg?height=600&width=800"
                  afterImage="/placeholder.svg?height=600&width=800"
                  beforeLabel="Before"
                  afterLabel="After"
                />
                <h3 className="text-xl font-bold">Website Redesign</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Transforming an outdated website into a modern, user-friendly experience
                </p>
              </div>

              <div className="space-y-4">
                <BeforeAfterSlider
                  beforeImage="/placeholder.svg?height=600&width=800"
                  afterImage="/placeholder.svg?height=600&width=800"
                  beforeLabel="Before"
                  afterLabel="After"
                />
                <h3 className="text-xl font-bold">Logo Refinement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Evolving a brand identity while maintaining its core essence
                </p>
              </div>
            </div>
          </div>
        </section> */}

{/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
  <div className="container px-4 md:px-6">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How I Build My Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          Every project you see here was built by me — from initial spark to final polish. Here’s how I usually approach things:
        </p>

        <div className="grid gap-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              1
            </div>
            <div>
              <h3 className="font-bold">Ideation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I start by identifying a problem or exploring a concept that excites me — something worth building.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              2
            </div>
            <div>
              <h3 className="font-bold">Wireframing & UI Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I sketch out user flows, draft UI ideas in Figma or on paper, and iterate on design until it feels right.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              3
            </div>
            <div>
              <h3 className="font-bold">Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Whether it’s Flutter, SwiftUI, or web tech like React, I build the app with clean, scalable code.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              4
            </div>
            <div>
              <h3 className="font-bold">Testing & Launch</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I test thoroughly, squash bugs, and then publish or deploy. Sometimes on the App Store, sometimes on GitHub, always with pride.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image src="/assets/workflow.png" alt="My Process" fill className="object-cover" />
        </div>
      </div>
    </div>
  </div>
</section> */}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Create Together</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ready to start your next project? Get in touch with me.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

