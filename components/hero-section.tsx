"use client"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/4people.png" alt="Deep Dive China Team" fill className="object-cover" priority quality={90} />
      </div>

      {/* Beautiful gradient overlay mask - stronger at top and bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      {/* Title at top */}
      <div className="relative z-10 w-full px-4 md:px-8 pt-12 md:pt-16 lg:pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl text-center whitespace-nowrap">
          Travel With Locals
        </h1>
      </div>

      {/* Spacer to push description to bottom */}
      <div className="flex-1" />

      {/* Description text at bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 pb-12 md:pb-16 lg:pb-20">
        <div className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto text-center">
          <p className="text-balance drop-shadow-lg">
            Founded by young professionals with extensive overseas experience, we bridge the gap between cultures. We
            specialize in private tours, focusing strictly on the cities we call home.
          </p>

          <p className="text-balance drop-shadow-lg">
            Let us take you beyond the guidebooks, from must-see sights to the hidden gems that define the real China.
          </p>
        </div>
      </div>
    </section>
  )
}
