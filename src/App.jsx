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
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
