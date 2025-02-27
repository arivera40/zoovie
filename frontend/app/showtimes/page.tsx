import Carousel from "@/components/Carousel"
import Modal from "@/components/Modal"
import Banner from "@/components/Banner"
import Accordion from "@/components/Accordion"
import Tabs from "@/components/Tabs"
import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MapPin } from "lucide-react"

const movies = [
  { id: 1, title: "The Matrix Resurrections", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, title: "Spider-Man: No Way Home", image: "/placeholder.svg?height=400&width=600" },
  { id: 3, title: "Dune", image: "/placeholder.svg?height=400&width=600" },
]

const showtimes = [
  { title: "The Matrix Resurrections", content: "12:00 PM, 3:00 PM, 6:00 PM, 9:00 PM" },
  { title: "Spider-Man: No Way Home", content: "1:00 PM, 4:00 PM, 7:00 PM, 10:00 PM" },
  { title: "Dune", content: "2:00 PM, 5:00 PM, 8:00 PM, 11:00 PM" },
]

export default function Showtimes() {
  return (
    <div className="showtimes-page">
      <Banner message="New releases this weekend! Book your tickets now." type="info" />

      <div className="mb-8">
        <Carousel items={movies} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] flex items-center gap-4">
          <div className="bg-[#e50914] p-3 rounded-full">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#e0e0e0]">Today's Date</h3>
            <p className="text-[#999]">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] flex items-center gap-4">
          <div className="bg-[#e50914] p-3 rounded-full">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#e0e0e0]">Operating Hours</h3>
            <p className="text-[#999]">10:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] flex items-center gap-4">
          <div className="bg-[#e50914] p-3 rounded-full">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#e0e0e0]">Location</h3>
            <p className="text-[#999]">123 Cinema Street</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-[#e0e0e0]">Today's Showtimes</h2>
          <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-[#e50914] to-transparent"></div>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg border border-[#333] p-4">
          <Accordion items={showtimes} />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-[#e0e0e0]">Featured Movies</h2>
          <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-[#e50914] to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} title={movie.title} content="Click for more info" image={movie.image} />
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <Modal trigger={<Button className="bg-[#e50914] hover:bg-[#b30710] text-white">Book Tickets</Button>}>
          <h2 className="text-2xl font-bold mb-4 text-[#e0e0e0]">Book Tickets</h2>
          <p className="text-[#999] mb-4">Select your movie, date, time and seats.</p>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-[#e0e0e0] mb-1">Select Movie</label>
              <select className="w-full p-2 rounded bg-[#333] text-[#e0e0e0] border border-[#444]">
                <option>The Matrix Resurrections</option>
                <option>Spider-Man: No Way Home</option>
                <option>Dune</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e0e0e0] mb-1">Select Date</label>
              <select className="w-full p-2 rounded bg-[#333] text-[#e0e0e0] border border-[#444]">
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Day After Tomorrow</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e0e0e0] mb-1">Select Time</label>
              <select className="w-full p-2 rounded bg-[#333] text-[#e0e0e0] border border-[#444]">
                <option>12:00 PM</option>
                <option>3:00 PM</option>
                <option>6:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            <Button className="bg-[#e50914] hover:bg-[#b30710] text-white mt-2">Continue to Seats</Button>
          </div>
        </Modal>
      </div>

      <div>
        <Tabs
          tabs={[
            {
              label: "Now Showing",
              content: <p className="p-4 text-[#999]">List of movies currently showing in our theaters.</p>,
            },
            {
              label: "Coming Soon",
              content: <p className="p-4 text-[#999]">Exciting new releases coming to our theaters soon.</p>,
            },
          ]}
        />
      </div>
    </div>
  )
}

