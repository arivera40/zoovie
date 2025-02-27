"use client"

import { useEffect, useState } from "react"

export default function TheaterCurtain() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false)

  useEffect(() => {
    // Open the curtains after component mounts
    setIsCurtainOpen(true)
  }, [])

  return (
    <div className="theater-curtain h-[200px] relative overflow-hidden mb-6">
      <div
        className={`curtain-left ${isCurtainOpen ? "animate-curtainOpen" : ""}`}
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className={`curtain-right ${isCurtainOpen ? "animate-curtainOpen" : ""}`}
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="spotlight text-center">
          <h1 className="text-4xl font-bold text-[#ffc107] mb-2">Zoovie</h1>
          <p className="text-xl text-[#e0e0e0]">Experience the magic of cinema</p>
        </div>
      </div>
    </div>
  )
}

