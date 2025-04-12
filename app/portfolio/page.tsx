"use client"
import { useState } from "react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { ProjectCategories } from "@/components/project-categories"
import { projects } from "@/public/data/data"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore my work across different categories and industries
                </p>
              </div>
            </div>
            <ProjectCategories 
              className="my-8" 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
              {filteredProjects.map((project) => (
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
          </div>
        </section>
      </main>
    </div>
  )
}