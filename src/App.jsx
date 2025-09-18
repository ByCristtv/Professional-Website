import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
      
  }, [])

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
      <ProgressBar/>
    </>
  )
}

export default App
