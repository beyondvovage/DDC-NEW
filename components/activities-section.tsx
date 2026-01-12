"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Utensils, Bike, Mountain, Plane, Dices, Wand2, Building2 } from "lucide-react"

export function ActivitiesSection() {
  const [filter, setFilter] = useState("all")

  const activities = [
    {
      id: 1,
      icon: Dices,
      title: "Mahjong Masterclass",
      description: "Learn the strategy & culture behind this ancient game",
      category: "cultural",
    },
    {
      id: 2,
      icon: Utensils,
      title: "Authentic Cooking Class",
      description: "Wet market tour + Home cooking with local chefs",
      category: "culinary",
    },
    {
      id: 3,
      icon: Wand2,
      title: "Shaolin Martial Arts",
      description: "Experience authentic Shaolin kung fu training",
      category: "cultural",
    },
    {
      id: 4,
      icon: Building2,
      title: "Temple Exploration",
      description: "Sacred temples and spiritual journeys",
      category: "cultural",
    },
    {
      id: 5,
      icon: Bike,
      title: "Urban Cycling & Hutong Tours",
      description: "Explore hidden lanes and historic neighborhoods",
      category: "adventure",
    },
    {
      id: 6,
      icon: Mountain,
      title: "City Hiking & Hidden Trails",
      description: "Discover scenic routes off the beaten path",
      category: "adventure",
    },
    {
      id: 7,
      icon: Utensils,
      title: "Local Foodie Hunt",
      description: "Street food exploration & private dining experiences",
      category: "culinary",
    },
    {
      id: 8,
      icon: Plane,
      title: "Airport Pickup Service",
      description: "VIP welcome service and airport transportation",
      category: "service",
    },
    {
      id: 9,
      icon: Plane,
      title: "High-Speed Rail Transfer",
      description: "Convenient train station pickups & transfers",
      category: "service",
    },
  ]

  const categories = ["all", "cultural", "culinary", "adventure", "service"]

  const filtered = filter === "all" ? activities : activities.filter((a) => a.category === filter)

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Signature Activities</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience authentic China through carefully curated local activities
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground border border-border hover:border-primary"
              }`}
            >
              {cat === "all" ? "All Activities" : cat}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div
                key={activity.id}
                className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all group"
              >
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground mb-6">{activity.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Book Now
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
