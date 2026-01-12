import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ActivitiesPage() {
  const activities = [
    {
      name: "Learn Mahjong",
      href: "/activities/mahjong",
      description:
        "Master the classic Chinese tile game with local experts. Learn strategies, cultural significance, and enjoy friendly competition.",
      image: "/mahjong-tiles-chinese-game.jpg",
      duration: "3 hours",
    },
    {
      name: "Chinese Calligraphy",
      href: "/activities/calligraphy",
      description:
        "Discover the ancient art of Chinese brush writing. Learn basic strokes and create your own masterpiece to take home.",
      image: "/chinese-calligraphy-brush-art.jpg",
      duration: "3 hours",
    },
    {
      name: "Cycling Tours",
      href: "/activities/cycling",
      description:
        "Explore hidden neighborhoods and scenic routes by bike. Experience the city like a local on two wheels.",
      image: "/cycling-tour-china-city.jpg",
      duration: "3 hours",
    },
    {
      name: "Walking Tours",
      href: "/activities/walking",
      description:
        "Walk through historic hutongs, bustling markets, and architectural wonders with knowledgeable local guides.",
      image: "/walking-tour-china-street.jpg",
      duration: "3 hours",
    },
    {
      name: "Pottery & Ceramics",
      href: "/activities/pottery",
      description:
        "Create traditional Chinese pottery using ancient techniques. Shape, glaze, and fire your own ceramic piece.",
      image: "/chinese-pottery-ceramics-art.jpg",
      duration: "3 hours",
    },
    {
      name: "Temple Exploration",
      href: "/activities/temple",
      description:
        "Visit sacred Buddhist and Taoist temples. Learn about Chinese spirituality and architectural traditions.",
      image: "/chinese-temple-buddhist-ancient.jpg",
      duration: "3 hours",
    },
    {
      name: "Shaolin Kung Fu",
      href: "/activities/kungfu",
      description: "Train with authentic Shaolin masters. Learn fundamental martial arts techniques and philosophy.",
      image: "/shaolin-kung-fu-martial-arts.jpg",
      duration: "3 hours",
    },
    {
      name: "Chinese Cooking",
      href: "/activities/cooking",
      description:
        "Cook authentic Chinese dishes with local chefs. Master traditional techniques and enjoy your creations.",
      image: "/chinese-cooking-class-food.jpg",
      duration: "3 hours",
    },
    {
      name: "Food Tours",
      href: "/activities/food-tours",
      description:
        "Taste your way through local markets and street food stalls. Discover authentic flavors and culinary traditions.",
      image: "/chinese-street-food-market.jpg",
      duration: "3 hours",
    },
    {
      name: "Airport Pickup",
      href: "/activities/airport-pickup",
      description: "Hassle-free airport pickup service with English-speaking drivers. Start your journey comfortably.",
      image: "/airport-pickup.png",
      duration: "Varies",
    },
    {
      name: "Train Station Pickup",
      href: "/activities/train-pickup",
      description: "Meet and greet service at train stations. Navigate arrivals smoothly with local assistance.",
      image: "/train-station-china-modern.jpg",
      duration: "Varies",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Explore Activities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in authentic Chinese culture through hands-on experiences led by local experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${activity.image}')` }} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{activity.name}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">{activity.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{activity.description}</p>
                  <Link href={activity.href}>
                    <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">Learn More</Button>
                  </Link>
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
