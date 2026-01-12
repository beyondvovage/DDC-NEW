import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions about our experiences or need help planning your trip? We're here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-muted/30 rounded-lg p-8">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For detailed inquiries and bookings</p>
              <a href="mailto:desmond@deepdivechina.com">
                <Button className="bg-primary hover:bg-accent text-primary-foreground">desmond@deepdivechina.com</Button>
              </a>
            </div>

            <div className="bg-muted/30 rounded-lg p-8">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Direct phone support</p>
              <a href="tel:+8618701406214">
                <Button className="bg-primary hover:bg-accent text-primary-foreground">+86 18701406214</Button>
              </a>
            </div>
          </div>

          <div className="mt-16 p-8 bg-muted/30 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
            <p className="text-muted-foreground">
              We typically respond within 24 hours during business days (Monday-Friday, 9:00 AM - 6:00 PM CST)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
