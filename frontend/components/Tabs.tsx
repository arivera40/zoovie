"use client"

import type React from "react"

import { useState } from "react"

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-[#333] overflow-hidden">
      <div className="flex border-b border-[#333]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-3 px-4 font-medium transition-colors ${
              activeTab === index
                ? "border-b-2 border-[#e50914] text-[#e50914] bg-[#222]"
                : "text-[#999] hover:text-[#e0e0e0] hover:bg-[#222]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  )
}

