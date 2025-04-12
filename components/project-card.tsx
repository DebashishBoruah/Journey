"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  imageSrc: string
  slug: string
  status : string
  className?: string
}

export function ProjectCard({ title, category, imageSrc, slug, status, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "Ongoing":
        return "bg-yellow-500"
      case "Published":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Link
      href={`/portfolio/${slug}`} 
      className={cn("group relative overflow-hidden rounded-lg transition-all duration-300", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100",
          )}
        />

        {/* Status Badge */}
        <span
          className={cn(
            "absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full text-white shadow-md",
            getStatusColor(status)
          )}
        >
          {status}
        </span>

        <div
          className={cn(
            "absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <p className="text-sm text-gray-300 mt-2">{category}</p>
          <div className="mt-4 rounded-full bg-white p-2">
            <ArrowUpRight className="h-4 w-4 text-black" />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
      </div>
    </Link>
  )
}
