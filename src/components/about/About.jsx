import { useRef } from 'react'
import './about.scss'
// import { motion, useInView } from 'framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  // const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      ref={ref}
      className="about"
      style={{
        background: 'linear-gradient(180deg, #030309, #00000b)',
      }}
    >
      <motion.div className="wrapper">
        <motion.div className="profile" style={{ y: yText }}>
          <motion.p>
            I’m extremely excited to invite you to explore my profile and learn
            a little more about me. I am a Front-End Developer with a passion
            for making clean, responsive and user-friendly websites and
            applications. My favorite part of being a developer is taking ideas
            from concept to completion. Being able to bring ideas to life is as
            intriguing as it is fulfilling.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
export default About
