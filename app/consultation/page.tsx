export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="py-8 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Deep Dive <span className="text-primary">China</span>
          </h1>
          <p className="text-center text-muted-foreground mt-2">One-on-One Consultation</p>
        </div>
      </header>

      {/* Step Instructions */}
      <div className="py-12 px-4 md:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Booking Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <p className="text-lg">Complete Payment</p>
            </div>
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <p className="text-lg">Book Your Time</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">
            Step 1: Complete payment to get qualification · Step 2: Book your time in the calendar below
          </p>
        </div>
      </div>

      {/* Main Content: Payment + Booking */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Payment Card */}
            <div className="flex items-start justify-center lg:justify-end">
              <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">30-Minute Deep Consultation</h3>
                    <p className="text-sm text-muted-foreground">One-on-One Professional Consultation</p>
                  </div>

                  <div className="py-6 border-y border-border">
                    <div className="text-4xl font-bold text-primary mb-2">¥299</div>
                    <p className="text-sm text-muted-foreground">Expert Consultation Service</p>
                  </div>

                  <ul className="text-left space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>30-minute one-on-one video consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Personalized travel planning advice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Deep cultural experience insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Multilingual support</span>
                    </li>
                  </ul>

                  <a
                    href="https://beyondvovage.lemonsqueezy.com/checkout/buy/782964d5-9e27-4314-901d-c934c438f2fd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-lg">
                      Pay Now
                    </button>
                  </a>

                  <p className="text-xs text-muted-foreground">Secure Payment via Lemon Squeezy</p>
                </div>
              </div>
            </div>

            {/* Right: Calendly Booking */}
            <div className="flex items-start justify-center lg:justify-start">
              <div className="w-full max-w-2xl">
                <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-xl font-bold mb-1">Choose Your Time</h3>
                    <p className="text-sm text-muted-foreground">
                      After payment, select your preferred consultation time
                    </p>
                  </div>
                  <div className="relative w-full" style={{ height: "700px" }}>
                    <iframe
                      src="https://calendly.com/beyondvovage/30min"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Schedule a consultation"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Deep Dive China</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Multilingual & Multicultural Team</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We are a startup team of Chinese international students from Nanyang Technological University in
                Singapore. We are multilingual and understand both Chinese and world cultures.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Small Team, Personal Service</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We are a small team, so the person who receives you is us! We don&apos;t consider expanding our
                capacity—we want to provide high-quality personalized services.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Local Experts, Deep Knowledge</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Each member of our team comes from different cities: Beijing, Shanghai, Hangzhou, and Guangzhou. Our
                partners have lived in these cities for over 20 years and are most familiar with these places.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Strong Multilingual Capability</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our members speak Mandarin, English, Cantonese, French, and Shanghainese. Our multilingual reception
                capability is stronger.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
            Deep Dive <span className="text-primary">China</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-4">Deep Cultural Immersion in China</p>
          <p className="text-muted-foreground text-xs">© 2025 Deep Dive China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
