import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DestinationsGrid } from "@/components/destinations-grid"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { PreLaunchSpecial } from "@/components/pre-launch-special"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  const teamMembers = [
    {
      name: "Desmond Wang",
      role: "Founder & Chief Experience Strategist",
      tagline: "The Cross-Regional Visionary",
      bio: "Desmond brings a rare, multi-regional perspective to China's urban narrative. Holds a Master of Education from NTU Singapore. His journey spans 7 years in the Northeast, 10 years in Beijing, and 4 years in Shanghai.",
      focusCities: ["Shanghai", "Beijing"],
      languages: ["English", "Mandarin", "Native Beijing Dialect"],
      quote:
        "I use my 15+ years of local insight to bridge the gap between cultures, uncovering the hidden stories that define China's complex urban soul.",
      calendlyUrl: "https://calendly.com/beyondvovage/30min",
      imageSrc: "/images/desmond-photo.png",
      imagePosition: "object-cover",
    },
    {
      name: "Celine Chen",
      role: "Hospitality Excellence Designer",
      tagline: "The Gold Standard of Guest Experience",
      bio: "A native of Guangzhou with an elite background in luxury service at The Ritz-Carlton and Cathay Pacific. Lived in New Zealand, Canada, and Singapore. She ensures every deep-dive experience in Southern China is delivered with unmatched cross-cultural sensitivity.",
      focusCities: ["Guangzhou"],
      languages: ["English", "Mandarin", "Cantonese"],
      quote:
        "I ensure your journey through Guangzhou is as seamless as it is authentic, bringing five-star hospitality to the heart of the local community.",
      calendlyUrl: "https://calendly.com/beyondvovage/30min",
      imageSrc: "/celine2.png",
      imagePosition: "object-cover",
    },
    {
      name: "Jackie Zheng",
      role: "Visual Experience Specialist",
      tagline: "The Global Nomad & Storyteller",
      bio: "A true global citizen who has traveled to over 30 countries. Holds a Master of Science in Management from UPF Barcelona. She translates Chinese heritage into a visual language that resonates with a global audience.",
      focusCities: ["Shanghai"],
      languages: ["English", "Mandarin", "Spanish"],
      quote:
        "Having explored the world, I see the beauty of Shanghai through a lens that is both deeply rooted and globally inspired.",
      calendlyUrl: "https://calendly.com/beyondvovage/30min",
      imageSrc: "/images/jaclyn-photo.png",
      imagePosition: "object-cover",
    },
    {
      name: "Alyssa Shu",
      role: "Urban Exploration Specialist",
      tagline: "The Global Hospitality Pro & Street Insider",
      bio: "Blends world-class hospitality with hardcore local expertise. Former full-time staff at Le Méridien Maldives. A born-and-raised Shanghainese who has led over 1,000 cultural adventures with a 98% satisfaction rate.",
      focusCities: ["Shanghai"],
      languages: ["English", "Mandarin", "Native Shanghainese"],
      quote:
        "From the islands of the Maldives to the alleys of Shanghai, my mission is to deliver professional, high-energy experiences that no map can guide you through.",
      calendlyUrl: "https://calendly.com/beyondvovage/30min",
      imageSrc: "/alyssa.png",
      imagePosition: "object-cover",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />

      {/* Pre-launch special section with image */}
      <PreLaunchSpecial />

      <section className="py-12 md:py-20 px-4 md:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet the Deep Dive China (DDC) Team</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are not a travel agency. We are a collective of native professionals, hospitality experts, and urban
              explorers. We don't just show you the city; we design the experience from the inside out.
            </p>
          </div>

          {/* Team Grid - 4 members in one row */}
          <div className="grid grid-cols-4 gap-4 mb-20 overflow-x-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-xl transition-shadow duration-300 min-w-0 flex-shrink-0"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className={`${member.imagePosition} hover:scale-105 transition-transform duration-500`}
                  />
                </div>

                {/* Info Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 whitespace-nowrap">{member.name}</h3>
                  <p className="text-primary font-semibold text-xs mb-1 whitespace-nowrap">{member.role}</p>
                  <p className="text-xs text-muted-foreground italic mb-2 whitespace-nowrap">{member.tagline}</p>

                  <p className="text-xs leading-relaxed mb-3 line-clamp-3">{member.bio}</p>

                  {/* Focus Cities */}
                  <div className="mb-2">
                    <p className="text-[10px] font-semibold mb-1 text-muted-foreground">CITIES</p>
                    <div className="flex flex-wrap gap-1">
                      {member.focusCities.map((city, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full whitespace-nowrap"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-2">
                    <p className="text-[10px] font-semibold mb-1 text-muted-foreground">LANGUAGES</p>
                    <div className="flex flex-wrap gap-1">
                      {member.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] rounded-full whitespace-nowrap"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-primary pl-2 italic text-[10px] text-muted-foreground mb-3 line-clamp-2">
                    "{member.quote}"
                  </blockquote>

                  <a href={member.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="w-full bg-primary hover:bg-accent text-primary-foreground text-xs py-1.5"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      View More
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose DDC Section */}
          <div className="bg-background border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose DDC?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Hyper-Local Roots</h3>
                <p className="text-muted-foreground">
                  Every specialist is a born-and-raised local in their focus cities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Bilingual & Multi-Dialect</h3>
                <p className="text-muted-foreground">
                  English, Spanish, French, Cantonese, Shanghainese, Beijing Dialect.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Elite Global Backgrounds</h3>
                <p className="text-muted-foreground">
                  NTU Singapore, European business schools, and world-class luxury brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DestinationsGrid />
      <BookingSection />
      <Footer />
    </div>
  )
}
