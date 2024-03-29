import './app.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
// import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="services" />
      </section>
      <section>
        {/* <Services /> */}
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <section id="Footer">
        <Footer />
      </section> */}
    </div>
  )
}

export default App
