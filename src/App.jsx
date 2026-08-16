import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import FeaturedItems from './components/FeaturedItems'
import About from './components/About'
import Specialties from './components/Specialties'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <FeaturedItems />
        <About />
        <Specialties />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
