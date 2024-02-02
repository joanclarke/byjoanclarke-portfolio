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
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      ref={ref}
      className="about"
      style={{
        background: 'linear-gradient(180deg, #030309, #00000b)',
      }}
    >
      <motion.div className="wrapper">
        <motion.div className="profile" style={{ x: yBg }}>
          <motion.p>
            I’m extremely excited to invite you to explore my profile and learn
            a little more about me. I am a Front-End Developer and UX Designer
            with a knack for making clean, beautiful, responsive and
            user-friendly websites. My favorite part of being a designer and
            developer is being able to bring ideas to life - taking them from
            concept to completion.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
export default About
