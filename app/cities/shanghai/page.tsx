import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function ShanghaiPage() {
  const activities = [
    {
      title: "Shanghai Mahjong & Tea",
      description:
        "Unlock the secrets of the tiles in a private French Concession tea house. Learn mahjong from local experts over premium Chinese tea.",
      duration: "3 hours",
      location: "French Concession, Shanghai",
      image: "/mahjong-tiles-chinese-game.jpg",
      link: "/cities/shanghai/mahjong",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold">Coming Soon</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Deep Dive Shanghai</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experience the vibrant blend of traditional and modern culture in China's most cosmopolitan city
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Experiences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-background border border-border rounded-lg overflow-hidden shadow-lg">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={activity.link} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/book" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
