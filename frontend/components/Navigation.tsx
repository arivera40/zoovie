import Link from "next/link"
import { Bell, Home, Star, HelpCircle, Film, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MovieClapper from "./MovieClapper"

export default function Navigation() {
  return (
    <div className="hidden border-r border-[#333] bg-[#1a1a1a] lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b border-[#333] px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-[#e50914]">
            <Film className="h-6 w-6" />
            <span className="">Zoovie</span>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto h-8 w-8 border-[#333] bg-[#1a1a1a] hover:bg-[#333] hover:text-[#e50914]"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#e0e0e0] transition-all hover:bg-[#333] hover:text-[#e50914]"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/showtimes"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#e0e0e0] transition-all hover:bg-[#333] hover:text-[#e50914]"
            >
              <Ticket className="h-4 w-4" />
              Showtimes
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e50914] text-white">
                6
              </Badge>
            </Link>
            <Link
              href="/reviews"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#e0e0e0] transition-all hover:bg-[#333] hover:text-[#e50914]"
            >
              <Star className="h-4 w-4" />
              Reviews
            </Link>
            <Link
              href="/customer-service"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#e0e0e0] transition-all hover:bg-[#333] hover:text-[#e50914]"
            >
              <HelpCircle className="h-4 w-4" />
              Customer Service
            </Link>
          </nav>
          <div className="mt-6 px-4">
            <div className="rounded-lg border border-[#333] bg-[#1a1a1a] p-4">
              <div className="flex items-center gap-4">
                <MovieClapper />
                <div>
                  <h4 className="text-sm font-medium text-[#e0e0e0]">Now Playing</h4>
                  <p className="text-xs text-[#999]">Check out today's featured films</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto p-4">
          <div className="film-strip h-2 mb-4"></div>
        </div>
      </div>
    </div>
  )
}

