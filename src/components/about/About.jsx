import { useRef } from 'react'
import './about.scss'
import { motion, useInView } from 'framer-motion'

const About = () => {
  return (
    <div id="About" className="about">
      <div>
        <h1>About</h1>
      </div>
      <div className="wrapper">
        <div className="profile">
          <p>
            I’m extremely excited to invite you to explore my profile and learn
            a little more about me. I am a Front-End Developer with a passion
            for making clean, responsive and user-friendly websites and
            applications. My favorite part of being a developer is taking ideas
            from concept to completion. Being able to bring ideas to life is as
            intriguing as it is fulfilling.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
