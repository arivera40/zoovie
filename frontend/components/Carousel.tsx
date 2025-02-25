"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  items: { id: number; title: string; image: string }[]
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg border border-[#333] group">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
            <div className="flex items-center">
              <span className="inline-block px-2 py-1 bg-[#e50914] text-white text-xs font-bold rounded mr-2">
                NOW SHOWING
              </span>
              <span className="text-[#e0e0e0]">Book your tickets now</span>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#e50914]" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

