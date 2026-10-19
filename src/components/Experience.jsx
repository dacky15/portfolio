import { experience, highlights } from '../data/content'

function MetaRow({ item }) {
  if (!item.period && !item.location) return null
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-sm text-white/45 font-semibold">
      {item.period && <span>{item.period}</span>}
      {item.period && item.location && <span className="text-white/25">•</span>}
      {item.location && <span>{item.location}</span>}
    </div>
  )
}

function FeaturedCard({ item }) {
  return (
    <div
      data-aos="fade-up"
      className="relative bg-gradient-to-br from-[#1a0a0a] to-[#111] border border-[#ff2a2a]/30 rounded-3xl p-8 md:p-10 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff2a2a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#ff2a2a] mb-4">
          {item.tag}
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white">{item.title}</h3>
            <p className="text-white/60 font-semibold text-lg mt-1">{item.org}</p>
          </div>
        </div>
        <MetaRow item={item} />

        <p className="text-white/75 leading-relaxed mt-5 max-w-3xl">{item.text}</p>

        {item.bullets?.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-6">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-white/70 leading-snug">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function CompactCard({ item, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#ff2a2a]/60 hover:bg-[#160a0a] transition-all duration-300 overflow-hidden"
    >
      <span className="absolute -top-4 right-4 text-[6rem] font-black text-white/[0.04] leading-none select-none">
        {String(index + 2).padStart(2, '0')}
      </span>
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#ff2a2a] mb-4">
        {item.tag}
      </span>
      <h3 className="text-2xl font-black text-white mb-1">{item.title}</h3>
      <p className="text-white/50 font-semibold">{item.org}</p>
      {item.period && <p className="text-white/35 text-sm font-semibold mt-1">{item.period}</p>}
      <p className="text-white/70 leading-relaxed relative z-10 mt-4">{item.text}</p>
    </div>
  )
}

export default function Experience() {
  const featured = experience.find((e) => e.featured)
  const rest = experience.filter((e) => !e.featured)

  return (
    <section id="experience" className="bg-black w-full px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-6">
            My Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Experience &amp; <span className="text-[#ff2a2a]">Highlights</span>
          </h2>
        </div>

        {/* Featured role */}
        {featured && <FeaturedCard item={featured} />}

        {/* Other entries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {rest.map((item, i) => (
            <CompactCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Highlights strip */}
        <div data-aos="fade-up" className="mt-12 md:mt-16">
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-5">
            Credentials &amp; Achievements
          </p>
          <div className="flex flex-wrap gap-3">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-5 py-2.5 text-sm md:text-base font-semibold text-white/90 hover:border-[#ff2a2a]/60 hover:bg-[#ff2a2a]/10 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
