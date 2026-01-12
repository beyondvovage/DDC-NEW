"use client"

import { Lock } from "lucide-react"

export function PaymentButton() {
  return (
    <div className="flex justify-center mt-8">
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5), 0 0 30px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.7), 0 0 40px rgba(16, 185, 129, 0.5);
          }
        }
        .glow-animation {
          animation: glow 2.5s ease-in-out infinite;
        }
      `}</style>

      <a
        href="https://buy.stripe.com/dRm9AT4UmfFT97S9Khgfu01"
        target="_blank"
        rel="noopener noreferrer"
        className="glow-animation"
      >
        <button className="flex items-center gap-3 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95">
          <Lock className="w-5 h-5" />
          Book Experience
        </button>
      </a>
    </div>
  )
}
