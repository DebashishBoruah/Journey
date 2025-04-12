"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || !e.touches[0]) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percentage)
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full overflow-hidden rounded-lg cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">{afterLabel}</div>
      </div>

      {/* Before image (clipped) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">{beforeLabel}</div>
      </div>

      {/* Slider control */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
          <div className="h-4 w-0.5 bg-gray-400 rounded-full" />
          <div className="h-4 w-0.5 bg-gray-400 rounded-full ml-1" />
        </div>
      </div>
    </div>
  )
}

