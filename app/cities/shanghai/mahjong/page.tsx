"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, Clock, Users, MapPin, Coffee, Award, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ShanghaiMahjongPage() {
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 4) return 1
        return prev + 1
      })
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-stone-800">
      <Navigation />

      {/* Section 1: Immersive Hero */}
      <header className="relative h-[85vh] w-full overflow-hidden">
        <img
          src="/mahjong-tiles-chinese-game.jpg"
          alt="Hands shuffling Mahjong tiles on a wooden table"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <div className="flex gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
              <span className="opacity-75">(120+ Reviews)</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Duration: 3 Hours</span>
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance max-w-4xl leading-tight">
            Unlock the Soul of Shanghai: Private Mahjong & Tea Experience
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-3xl opacity-95 mb-10 text-balance leading-relaxed">
            Held in a hidden tea bar in the Former French Concession. Learn the game, taste the tea, and live the
            culture.
          </p>
          <Link href="/book">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-full shadow-2xl transition-all transform hover:scale-105"
            >
              Check Availability (From S$125)
            </Button>
          </Link>
        </div>
      </header>

      {/* Section 2: The Story (Editorial Layout) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-8 text-center">
          More Than Just a Game
        </h2>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-stone-700 mb-16 text-center max-w-4xl mx-auto">
          This is not just a class—it's a cultural key. Hidden in a local neighborhood, this experience invites you into
          an authentic Chinese tea bar to master the art of Mahjong. With professional English translation and a relaxed
          atmosphere, you will move from beginner to player in just 3 hours.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Hands-on Learning</h3>
              <p className="text-stone-600 leading-relaxed">
                Master the rules on an automatic Mahjong table. Feel the rhythm of the tiles.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
              <Award className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Culture Dive</h3>
              <p className="text-stone-600 leading-relaxed">
                Understand the history and social etiquette behind the tiles. Learn what locals know.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
              <Coffee className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Tea Tasting</h3>
              <p className="text-stone-600 leading-relaxed">
                Enjoy premium local tea in a historic setting. Sip while you strategize.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
              <MapPin className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Walk the FFC</h3>
              <p className="text-stone-600 leading-relaxed">
                Located perfectly for a post-game stroll through Tianzifang and the French Concession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Journey (Vertical Timeline) */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-16 text-center">
            Your Journey Through the Tiles
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200" />

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative pl-20">
                <div
                  className={`absolute left-5 top-0 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep === 1 ? "bg-emerald-600 scale-125 shadow-emerald-400/50 shadow-xl" : "bg-emerald-400"
                  }`}
                >
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border transition-all duration-500 ${
                    activeStep === 1 ? "border-emerald-400 shadow-md" : "border-stone-200"
                  }`}
                >
                  <h3 className="font-bold text-xl text-emerald-900 mb-2">The Warm Up</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Meet at the Tea Bar (No. 327 Shan Xi Nan Road). Introduction to the history of Mahjong and its role
                    in Chinese social life.
                  </p>
                </div>
              </div>

              <div className="relative pl-20">
                <div
                  className={`absolute left-5 top-0 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep === 2 ? "bg-emerald-600 scale-125 shadow-emerald-400/50 shadow-xl" : "bg-emerald-400"
                  }`}
                >
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border transition-all duration-500 ${
                    activeStep === 2 ? "border-emerald-400 shadow-md" : "border-stone-200"
                  }`}
                >
                  <h3 className="font-bold text-xl text-emerald-900 mb-2">The Basics</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Learn the tiles, rules, and strategies with your English-speaking guide. From Pung to Kong, we break
                    it all down.
                  </p>
                </div>
              </div>

              <div className="relative pl-20">
                <div
                  className={`absolute left-5 top-0 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep === 3 ? "bg-emerald-600 scale-125 shadow-emerald-400/50 shadow-xl" : "bg-emerald-400"
                  }`}
                >
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border transition-all duration-500 ${
                    activeStep === 3 ? "border-emerald-400 shadow-md" : "border-stone-200"
                  }`}
                >
                  <h3 className="font-bold text-xl text-emerald-900 mb-2">The Game</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Play on a real automatic machine. Experience the "clack-clack" rhythm of Shanghai leisure life. This
                    is where it all clicks.
                  </p>
                </div>
              </div>

              <div className="relative pl-20">
                <div
                  className={`absolute left-5 top-0 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep === 4 ? "bg-emerald-600 scale-125 shadow-emerald-400/50 shadow-xl" : "bg-emerald-400"
                  }`}
                >
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border transition-all duration-500 ${
                    activeStep === 4 ? "border-emerald-400 shadow-md" : "border-stone-200"
                  }`}
                >
                  <h3 className="font-bold text-xl text-emerald-900 mb-2">The Culture</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Tea tasting and social storytelling. Learn what Mahjong means to families, friendships, and Shanghai
                    itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Details (Info Cards) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-16 text-center">
            Everything You Need to Know
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200">
              <h3 className="font-bold text-2xl text-emerald-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                What's Included
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Electronic Mahjong Table rental for your private group</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Professional English-speaking guide with cultural expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Comprehensive instruction materials and cheat sheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Premium local tea tasting throughout the session</span>
                </li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <h3 className="font-bold text-2xl text-stone-900 mb-6 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-stone-600" />
                Logistics
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Meeting Point</h4>
                  <p className="text-stone-600">327 Shan Xi Nan Lu, Huang Pu Qu, Shanghai</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Accessibility</h4>
                  <p className="text-stone-600">Wheelchair accessible, Near public transport (Metro Line 9/12)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">Cancellation Policy</h4>
                  <p className="text-stone-600">Full refund if cancelled 24 hours in advance. No questions asked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meeting Location Section with embedded Google Maps */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4">Where We'll Meet</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Located in the heart of the Former French Concession, our tea bar is nestled on historic Shanxi South
              Road.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
            <div className="p-6 md:p-8 border-b border-stone-200 bg-gradient-to-br from-emerald-50 to-white">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-stone-900 mb-2">Traditional Tea Bar</h3>
                  <p className="text-stone-700 mb-3">327 Shan Xi Nan Lu, Huang Pu District, Shanghai</p>
                  <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span>5 min walk from Shaanxi South Road Station (Line 1/10/12)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span>Near Tianzifang Art District</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full" style={{ height: "500px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.3894572891875!2d121.46276227615886!3d31.21809967436045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270a6f3e4e7f9%3A0x3c6e4e4e4e4e4e4e!2s327%20Shanxi%20S%20Rd%2C%20Huangpu%20District%2C%20Shanghai%2C%20China!5e0!3m2!1sen!2ssg!4v1704067200000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-6 md:p-8 bg-stone-50">
              <h4 className="font-semibold text-stone-900 mb-3">How to Get Here</h4>
              <ul className="space-y-2 text-stone-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">Metro:</span>
                  <span>Take Line 1, 10, or 12 to Shaanxi South Road Station, Exit 1. Walk south for 5 minutes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">Taxi:</span>
                  <span>Show driver "陕西南路327号" or use the address: 327 Shanxi Nan Lu, Huangpu Qu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">Walking:</span>
                  <span>From Xintiandi: 15 min walk through the French Concession tree-lined streets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Real Stories (Review Wall) */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4 text-center">
            What Travelers Say
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg">Real experiences from real guests</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-bold text-lg text-stone-900 mb-2">Must Do in Shanghai!</h4>
              <p className="text-stone-600 leading-relaxed mb-4">
                "On a drizzling afternoon, I walked into a cozy tea house and had the BEST time. Jenny patiently
                explained PUNG, KONG, and CHEW. We played for real and I felt like a local."
              </p>
              <p className="text-sm text-stone-500 font-medium">— Karen J.</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-bold text-lg text-stone-900 mb-2">Immersive Cultural Experience</h4>
              <p className="text-stone-600 leading-relaxed mb-4">
                "My wife and I were looking for something different. Connecting with Chinese people in a casual tea shop
                was the highlight of our trip."
              </p>
              <p className="text-sm text-stone-500 font-medium">— David M.</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="font-bold text-lg text-stone-900 mb-2">Fun & No Language Barrier</h4>
              <p className="text-stone-600 leading-relaxed mb-4">
                "Great instruction sheets, lovely tea house. Highly recommend! Perfect for anyone wanting to learn this
                fascinating game."
              </p>
              <p className="text-sm text-stone-500 font-medium">— Schaloupka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Sticky Mobile Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-stone-200 shadow-2xl z-40 px-4 py-3">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div>
            <p className="text-2xl font-bold text-stone-900">S$125</p>
            <p className="text-xs text-stone-500">per person</p>
          </div>
          <Link href="/book">
            <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-base font-semibold rounded-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
