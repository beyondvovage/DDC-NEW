"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/95 text-background py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Deep Dive China</h3>
            <p className="text-background/80 text-sm">Travel With Locals</p>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-semibold mb-4">Experiences</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition">
                  Mahjong Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Cooking Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Urban Cycling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  City Hiking
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © {currentYear} Deep Dive China. All rights reserved. Travel With Locals.
          </p>
        </div>
      </div>
    </footer>
  )
}
