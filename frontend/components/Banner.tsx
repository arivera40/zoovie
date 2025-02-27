interface BannerProps {
  message: string
  type?: "info" | "success" | "warning" | "error"
}

export default function Banner({ message, type = "info" }: BannerProps) {
  const bgColors = {
    info: "bg-[#1a1a1a]",
    success: "bg-[#1a3a1a]",
    warning: "bg-[#3a3a1a]",
    error: "bg-[#3a1a1a]",
  }

  const borderColors = {
    info: "border-[#e50914]",
    success: "border-green-600",
    warning: "border-yellow-600",
    error: "border-red-600",
  }

  return (
    <div className={`${bgColors[type]} ${borderColors[type]} text-[#e0e0e0] p-4 rounded-md mb-6 border-l-4 film-strip`}>
      <p>{message}</p>
    </div>
  )
}

