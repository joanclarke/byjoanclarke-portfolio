import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const hoverVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
}

// const buttonVariants = {
//   hover: {
//     scale: 1.1,
//     textShadow: '0px 0px 8px rgb(255, 255, 255)',
//     boxShadow: '0px 0px  8px rgb(255, 255, 255)',
//   },
// }

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>JOAN CLARKE</motion.h2> */}
          <div className="creative">
            <p>creative</p>
          </div>
          <div className="heading">
            <motion.h1 variants={textVariants}>
              DESIGNER <span>&</span>
            </motion.h1>
            <motion.h1 variants={textVariants}>DEVELOPER</motion.h1>
          </div>
          <motion.div className="buttons">
            <a href="#featured" alt="link to portfolio">
              <motion.button
                className="projects"
                initial="hidden"
                animate="visible"
                // transition={{ type: 'spring', delay: 0.5 }}
                // whileHover={{ scale: 1.5, color: '#94dd1f' }}

                // transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={hoverVariants}
              >
                SEE MY WORK
              </motion.button>
            </a>
            <a href="#Contact" alt="link to contact">
              <motion.button
                className="contactMe"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT ME
              </motion.button>
            </a>
          </motion.div>
          <div className="scrollWrapper">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Creator Developer Designer
      </motion.div>
      <div className="imageContainer">
        <div className="imageWrapper">
          <img
            className="profilePic"
            src="/jc-profilepic.png"
            alt="joan clarke profile picture"
          />
          <img
            className="signature"
            src="/jclarke-signature.png"
            alt="joan clarke signature"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
