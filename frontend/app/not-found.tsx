import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Ticket } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <div className="text-[#e50914] text-9xl font-bold">404</div>
        <div className="film-strip h-4 my-4"></div>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-[#e0e0e0]">Page Not Found</h1>
      <p className="text-lg text-[#999] mb-8 max-w-md">
        The movie you're looking for isn't in our theater. Please check the URL or return to our homepage.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-[#e50914] hover:bg-[#b30710] text-white">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </Link>
        <Link href="/showtimes">
          <Button variant="outline" className="border-[#333] text-[#e0e0e0] hover:bg-[#333]">
            <Ticket className="mr-2 h-4 w-4" />
            View Showtimes
          </Button>
        </Link>
      </div>
    </div>
  )
}

