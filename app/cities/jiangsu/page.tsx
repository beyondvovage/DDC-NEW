import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JiangsuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative py-20 md:py-32 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold">Coming Soon</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Deep Dive Jiangsu</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Explore the classical gardens, ancient water towns, and cultural heritage of Jiangsu province
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
              Express Interest
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
