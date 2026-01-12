"use client"

export function TeamSection() {
  const reasons = [
    {
      id: 1,
      title: "Multilingual & Multicultural Team",
      description:
        "We are a startup team of Chinese international students from Nanyang Technological University in Singapore. We are multilingual and understand both Chinese and world cultures.",
      icon: "🌏",
    },
    {
      id: 2,
      title: "Small Team, Personal Service",
      description:
        "We are a small team, so the person who receives you is us! We don't consider expanding our capacity—we want to provide high-quality personalized services.",
      icon: "👥",
    },
    {
      id: 3,
      title: "Local Experts, Deep Knowledge",
      description:
        "Each member of our team comes from different cities: Beijing, Shanghai, Hangzhou, and Guangzhou. Our partners have lived in these cities for over 20 years and are most familiar with these places.",
      icon: "📍",
    },
    {
      id: 4,
      title: "Strong Multilingual Capability",
      description:
        "Our members speak Mandarin, English, Cantonese, French, and Shanghainese. Our multilingual reception capability is stronger.",
      icon: "🗣️",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Why Choose Deep Dive China</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
