import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

  // Opens the visitor's email app with the message prefilled (no backend needed).
  const onSubmit = (e) => {
    e.preventDefault()
    const name = `${form.firstName} ${form.lastName}`.trim()
    const subject = encodeURIComponent(`Portfolio message from ${name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${name}${form.email ? ` (${form.email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900">
      {/* Huge background text */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12">
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form panel */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div data-aos="fade-up" className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white">
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">Reach Me</div>

          <form className="flex flex-col gap-12 md:gap-16 w-full" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <input id="firstName" value={form.firstName} onChange={onChange} type="text" placeholder="First Name" required className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium" />
                <input id="lastName" value={form.lastName} onChange={onChange} type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium" />
                <input id="email" value={form.email} onChange={onChange} type="email" placeholder="Email" required className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium" />
              </div>
              <div className="flex-1 flex flex-col">
                <textarea id="message" value={form.message} onChange={onChange} placeholder="Type your message here" required className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 mt-4 items-start md:items-end">
              <p className="flex-1 text-sm font-medium text-white/80 max-w-[320px] leading-snug">
                Prefer email? Reach me directly at{' '}
                <a href={`mailto:${profile.email}`} className="underline hover:text-white">{profile.email}</a>.
              </p>
              <div className="flex-1 flex justify-start md:justify-end">
                <button type="submit" className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap">
                  Send
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
