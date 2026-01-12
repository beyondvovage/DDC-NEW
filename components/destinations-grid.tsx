"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DestinationsGrid() {
  const destinations = [
    {
      id: 1,
      city: "Shanghai",
      title: "Deep Dive Shanghai",
      tag: "The Modern Magic",
      description:
        "Experience the perfect blend of traditional Chinese culture and cutting-edge modernity in China's most dynamic metropolis.",
      backgroundImage: "/shanghai-skyline-modern-city.jpg",
      comingSoon: false,
    },
    {
      id: 2,
      city: "Beijing",
      title: "Deep Dive Beijing",
      tag: "The Imperial Capital",
      description:
        "Walk through centuries of history in China's ancient capital, from the Forbidden City to hidden hutongs.",
      backgroundImage: "/beijing-forbidden-city-skyline.jpg",
      comingSoon: false,
    },
    {
      id: 3,
      city: "Guangzhou",
      title: "Deep Dive Guangzhou",
      tag: "The Food Capital",
      description: "Discover authentic Cantonese culture through its legendary cuisine and vibrant trading heritage.",
      backgroundImage: "/guangzhou-cityscape-skyline.jpg",
      comingSoon: false,
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explore Our Cities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Deep cultural immersion in Shanghai, Beijing, and Guangzhou. Authentic local experiences curated by insiders
            who call these cities home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/cities/${dest.city.toLowerCase()}`} className="group block">
              <div className="rounded-xl overflow-hidden bg-card border border-border transition-all hover:shadow-xl hover:border-primary/50">
                {/* Image section */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${dest.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-3xl font-bold mb-2">{dest.title}</h3>
                    <p className="text-sm font-medium opacity-90">{dest.tag}</p>
                  </div>
                  {dest.comingSoon && (
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{dest.description}</p>
                  <Button
                    variant="default"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {dest.comingSoon ? "Notify Me" : "Start Your Journey"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
