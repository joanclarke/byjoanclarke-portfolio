import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/leica-christmas-scott-norris.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus consequuntur facere eos pariatur dolor, amet itaque rem dicta ducimus?',
  },
  {
    id: 2,
    title: 'Next js Commerce',
    img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/reboot-linda-woods.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus consequuntur facere eos pariatur dolor, amet itaque rem dicta ducimus?',
  },
  {
    id: 3,
    title: 'Vanilla JS App Commerce',
    img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/cold-fusion-scott-norris.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus consequuntur facere eos pariatur dolor, amet itaque rem dicta ducimus?',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/power-play-ii-mindy-sommers.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloribus consequuntur facere eos pariatur dolor, amet itaque rem dicta ducimus?',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}
export default Portfolio
