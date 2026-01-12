import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PreLaunchSpecial() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-card">
              <Image
                src="/images/unnamed.jpg"
                alt="Pre-Launch Consultation & Route Planning"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                PRE-LAUNCH SPECIAL
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Consultation & Route Planning</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground mb-6">
                <p>
                  Our team members are currently spread across the globe—some are completing their world travels, while
                  others are finishing their academic degrees. As a result, our official full-scale services are
                  scheduled to launch on June 1, 2026.
                </p>
                <p>
                  In the meantime, we are offering 1-2 day custom itinerary planning for a fee of $19.80. Once payment
                  is completed, a member of our team will contact you within 24 hours.
                </p>
                <p>
                  If you have any questions or would like to consult with us beforehand, please feel free to reach out
                  via email or schedule a video call.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">1-2 Days Consultation</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive planning session with our expert guides</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Customized Itinerary</h3>
                  <p className="text-sm text-muted-foreground">Route planning designed specifically for you</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Exclusive Pre-Launch Price</h3>
                  <p className="text-sm text-muted-foreground">Limited time offer at special launch pricing</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <a href="https://buy.stripe.com/eVqfZh9aC3Xb3Ny5u1gfu02" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Plan and Pay
                </Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground text-center">Limited slots available during pre-launch phase</p>
          </div>
        </div>
      </div>
    </section>
  )
}
