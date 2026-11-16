import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { profile } from '../data/content'

// Fades each hero element up once the preloader is gone.
const rise = (introDone, delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  transition: { duration: 0.9, ease: 'easeOut', delay },
})

const PlayIcon = () => (
  <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)
const PauseIcon = () => (
  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)
const SoundIcon = () => (
  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M11 5L6 9H2v6h4l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" />
  </svg>
)
const ReplayIcon = () => (
  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

export default function Hero({ introDone = true }) {
  const videoRef = useRef(null)
  // idle → playing (with sound) → ended; or muted when the browser blocks autoplay sound
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
  }, [])

  // Play the narrated intro once, as soon as the preloader has cleared.
  useEffect(() => {
    const v = videoRef.current
    if (!introDone || !v) return
    v.currentTime = 0
    v.muted = false
    v.play()
      .then(() => setStatus('playing'))
      .catch(() => {
        // Browsers block sound until the visitor interacts: start muted and offer sound.
        v.muted = true
        v.play()
          .then(() => setStatus('muted'))
          .catch(() => setStatus('idle'))
      })
  }, [introDone])

  const playFromStartWithSound = (v) => {
    v.currentTime = 0
    v.muted = false
    v.play().then(() => setStatus('playing')).catch(() => setStatus('idle'))
  }

  const onReelClick = (e) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (status === 'playing') {
      v.pause()
      setStatus('paused')
    } else if (status === 'paused') {
      v.play().then(() => setStatus('playing')).catch(() => {})
    } else {
      // idle, muted or ended: (re)start the narration with sound
      playFromStartWithSound(v)
    }
  }

  const reel = {
    idle: { icon: <PlayIcon />, label: 'Play Reel' },
    playing: { icon: <PauseIcon />, label: 'Pause' },
    paused: { icon: <PlayIcon />, label: 'Resume' },
    muted: { icon: <SoundIcon />, label: 'Tap for sound' },
    ended: { icon: <ReplayIcon />, label: 'Replay' },
  }[status]

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background: real video if you have one, else an animated gradient */}
      {profile.hasHeroVideo ? (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onEnded={() => setStatus('ended')}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* Drop your file at: public/hero.mp4 */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="hero-fallback absolute inset-0 w-full h-full z-0" />
      )}

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end w-full">
        {/* Left: text + buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <motion.h1
            {...rise(introDone, 0)}
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm an <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">{profile.role}</span>
          </motion.h1>

          <motion.p
            {...rise(introDone, 0.2)}
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            {profile.heroLine}
          </motion.p>

          <motion.div {...rise(introDone, 0.4)} className="flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="px-5 py-2.5 text-sm md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              My Journey
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: reel control */}
        {profile.hasHeroVideo && (
          <motion.button
            type="button"
            {...rise(introDone, 0.6)}
            onClick={onReelClick}
            aria-label={reel.label}
            className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto bg-transparent border-0 p-0"
          >
            <span
              className={`w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)] ${
                status === 'muted' ? 'animate-pulse' : ''
              }`}
            >
              {reel.icon}
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {reel.label}
            </span>
          </motion.button>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...rise(introDone, 0.8)}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
