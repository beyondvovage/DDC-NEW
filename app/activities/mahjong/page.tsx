import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function MahjongPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Mahjong</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the classic Chinese game with experienced local players. Learn the rules, strategy, and cultural
                significance of this beloved pastime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>3 hours of instruction</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Available in Guangzhou</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Small groups (2-4 people)</span>
                </div>
              </div>

              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  Book This Activity
                </Button>
              </Link>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="/chinese-mahjong-game-tiles.jpg" alt="Mahjong tiles" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
