import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'iFlix',
    img: 'https://i.imgur.com/Iu87Y69.png',
    // img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/leica-christmas-scott-norris.jpg',
    desc: `iFlix is a site where users can access movie data. Its search feature allows you to access the information of any movie such as IMDB ratings and votes, nominations, awards, metascores and box office info. Its main feature 'Flix Fight' allows users to compare the records of any two movie at a time.`,
    link: 'https://iflixwatch.netlify.app/',
  },
  {
    id: 2,
    title: 'Sparkle',
    img: 'https://i.imgur.com/YkamJa7.png',
    // img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/reboot-linda-woods.jpg',
    desc: 'A luxurious events booking agency. Clients can browse gallery of previous events as well as get information on services offered and the team at Sparkles.',
    link: 'https://joanclarke.github.io/sparkles/',
  },
  {
    id: 3,
    title: 'Power In The Word',
    img: 'https://i.imgur.com/xSChrFJ.png',
    // img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/cold-fusion-scott-norris.jpg',
    desc: 'Responsive website. Designed to provide viewers with live streaming services as well as videos of past events.',
    link: 'https://joanclarke.github.io/Power-in-the-Word-Website/',
  },
  {
    id: 4,
    title: 'Clono',
    img: 'https://i.imgur.com/z2VWI9s.png',
    // img: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/power-play-ii-mindy-sommers.jpg',
    desc: 'Clono is a simple clone of Trello. Created as part of a team project (Gecko’s Team 12) during Chingu Voyage 7 | Voyage-7 | https://chingu.io/',
    link: 'https://chingu-voyage7.github.io/Geckos-Team-12/',
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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.link} alt="link to project" target="_blank">
                See Demo
              </a>
            </motion.button>
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
    <div id="featured" className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Case Studies</h1>
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
