"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCategoriesProps {
  className?: string;
  onCategoryChange?: (category: string) => void;
  activeCategory: string;
}

export function ProjectCategories({ 
  className, 
  onCategoryChange, 
  activeCategory 
}: ProjectCategoriesProps) {
  const categories = ["All", "Branding", "Web Design", "App Developement", "UI/UX Design", "Thumbnail Design", "Photography"]

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange && onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}