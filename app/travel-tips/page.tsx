import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TravelTipsPage() {
  const tips = [
    {
      title: "Visa Requirements",
      content:
        "Most visitors to China require a visa. Apply at your nearest Chinese embassy or consulate at least 1 month before travel. Consider applying for a multiple-entry visa if planning to visit multiple times.",
    },
    {
      title: "Best Time to Visit",
      content:
        "Spring (March-May) and autumn (September-November) offer the most pleasant weather. Avoid major holidays like Chinese New Year and Golden Week when attractions are crowded and prices increase.",
    },
    {
      title: "Language Tips",
      content:
        "Download a translation app and offline maps before arrival. Learn basic phrases in Mandarin. Many Chinese people don't speak English, but they are generally helpful and patient with foreigners.",
    },
    {
      title: "Mobile Payment",
      content:
        "China is largely cashless. Set up WeChat Pay or Alipay before arriving, though credit cards work at hotels and major stores. Carry some cash for small vendors and emergencies.",
    },
    {
      title: "Internet Access",
      content:
        "Consider getting a VPN before arriving as many Western websites and apps are blocked. Purchase a local SIM card at the airport for reliable internet access throughout your trip.",
    },
    {
      title: "Transportation",
      content:
        "Download DiDi (Chinese Uber) for convenient rides. High-speed trains connect major cities efficiently. Metro systems in large cities are modern, clean, and affordable.",
    },
    {
      title: "Cultural Etiquette",
      content:
        "Remove shoes when entering homes. Use both hands when giving or receiving items. Don't tip—it's not customary. Be respectful when taking photos, especially of older people.",
    },
    {
      title: "Food Safety",
      content:
        "Street food is generally safe at busy stalls. Drink bottled water. Use chopsticks provided by restaurants. Don't be afraid to try new foods—Chinese cuisine is incredibly diverse.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">China Travel Tips</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Essential information to help you prepare for your journey to China
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-bold mb-4">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
