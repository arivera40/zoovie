import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CardProps {
  title: string
  content: string
  image?: string
}

export default function Card({ title, content, image }: CardProps) {
  return (
    <div className="movie-card bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333]">
      {image && (
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-[#e50914] text-white text-xs font-bold px-2 py-1 rounded">
            NOW SHOWING
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-[#e0e0e0]">{title}</h3>
          <div className="flex items-center text-[#ffc107]">
            <Star className="h-4 w-4 fill-[#ffc107] mr-1" />
            <span>4.5</span>
          </div>
        </div>
        <p className="text-[#999] text-sm mb-4">{content}</p>
        <div className="flex gap-2">
          <Button className="flex-1 bg-[#e50914] hover:bg-[#b30710] text-white">Book</Button>
          <Button variant="outline" className="flex-1 border-[#333] text-[#e0e0e0] hover:bg-[#333]">
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}

