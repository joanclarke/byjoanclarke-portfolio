import './app.scss'
import Navbar from './components/navbar/Navbar'
import Test from './components/navbar/Test'

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </div>
  )
}

export default App
