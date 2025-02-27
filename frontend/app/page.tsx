import { Play, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const featuredMovies = [
    { id: 1, title: "Interstellar", image: "/placeholder.svg?height=400&width=600", rating: 4.8 },
    { id: 2, title: "The Dark Knight", image: "/placeholder.svg?height=400&width=600", rating: 4.9 },
    { id: 3, title: "Inception", image: "/placeholder.svg?height=400&width=600", rating: 4.7 },
  ]

  return (
    <div className="home-page">
      <div className="hero-section relative rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Featured Movie"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center z-20 p-8">
          <h1 className="text-5xl font-bold text-white mb-4">The Greatest Showman</h1>
          <p className="text-xl text-gray-200 mb-6">Experience the magic of the greatest show on earth</p>
          <div className="flex gap-4">
            <Button className="bg-[#e50914] hover:bg-[#b30710] text-white">
              <Play className="mr-2 h-4 w-4" />
              Watch Trailer
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              <Calendar className="mr-2 h-4 w-4" />
              Book Tickets
            </Button>
          </div>
        </div>
      </div>

      <div className="featured-movies mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-[#e0e0e0]">Featured Movies</h2>
          <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-[#e50914] to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="movie-card bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333]">
              <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#e0e0e0]">{movie.title}</h3>
                  <div className="flex items-center text-[#ffc107]">
                    <Star className="h-4 w-4 fill-[#ffc107] mr-1" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <p className="text-[#999] text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button className="w-full bg-[#333] hover:bg-[#444] text-[#e0e0e0]">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="coming-soon bg-[#1a1a1a] rounded-lg p-6 border border-[#333]">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-[#e0e0e0]">Coming Soon</h2>
          <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-[#e50914] to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-4 items-center">
            <div className="film-strip w-[80px] h-[80px] flex items-center justify-center bg-[#121212] rounded-lg">
              <span className="text-2xl font-bold text-[#e50914]">15</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0]">Dune: Part Two</h3>
              <p className="text-[#999] text-sm">Coming in 15 days</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="film-strip w-[80px] h-[80px] flex items-center justify-center bg-[#121212] rounded-lg">
              <span className="text-2xl font-bold text-[#e50914]">30</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0]">Avengers: Secret Wars</h3>
              <p className="text-[#999] text-sm">Coming in 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

