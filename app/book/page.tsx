import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Pre-launch Special Section */}
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 md:p-8 mb-12 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Pre-launch Special</h2>
              <a href="https://buy.stripe.com/eVqfZh9aC3Xb3Ny5u1gfu02" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  Pay Now
                </Button>
              </a>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
              <p>
                Our team members are currently spread across the globe—some are completing their world travels, while others are finishing their academic degrees. As a result, our official full-scale services are scheduled to launch on June 1, 2026.
              </p>
              <p>
                In the meantime, we are offering 1-2 day custom itinerary planning for a fee of $19.80. Once payment is completed, a member of our team will contact you within 24 hours.
              </p>
              <p>
                If you have any questions or would like to consult with us beforehand, please feel free to reach out via email or schedule a video call.
              </p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Book Your Experience</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Video Consultation */}
            <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">15-Minute Consultation</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Schedule a 15-minute video call to discuss your trip and get personalized recommendations
                </p>
              </div>

              {/* Calendly Embed */}
              <div className="w-full">
                <iframe src="https://calendly.com/beyondvovage/30min" width="100%" height="700" className="border-0" />
              </div>
            </div>

            {/* Right Side - Google Form */}
            <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Booking Form</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Fill out the form below to start planning your authentic Chinese cultural journey
                </p>
              </div>

              {/* Google Form Embed */}
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeYrQENV54mxc5QQhnKQgoiDOOsEDorIDwVjrjOl8uxe30V8g/viewform?embedded=true"
                  width="100%"
                  height="2060"
                  className="border-0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
