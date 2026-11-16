import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Flips to true once the red preloader has slid away, so the hero intro
  // (headline + narrated reel) starts when the visitor can actually see it.
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <Preloader onDone={() => setIntroDone(true)} />
      <Navbar />
      <Hero introDone={introDone} />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
