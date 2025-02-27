"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Clock } from "lucide-react"

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-[#333] rounded-md overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-[#1a1a1a] hover:bg-[#222] transition-colors"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-[#e50914] mr-2" />
              <span className="text-[#e0e0e0] font-medium">{item.title}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-[#e50914]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#e50914]" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-[#222] text-[#999] border-t border-[#333]">
              <div className="flex flex-wrap gap-2">
                {item.content.split(", ").map((time, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-[#333] rounded-full text-sm hover:bg-[#e50914] hover:text-white cursor-pointer transition-colors"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

