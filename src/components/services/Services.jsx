import './services.scss'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
          <hr />
        </p>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="people.webp" alt="people" />
          <h1>
            <p>Unique</p> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <p>For Your</p> Business.
          </h1>
          <button>WHAT I DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            fugiat quod officiis est consequuntur earum vitae adipisci sit porro
            tempora!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            fugiat quod officiis est consequuntur earum vitae adipisci sit porro
            tempora!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            fugiat quod officiis est consequuntur earum vitae adipisci sit porro
            tempora!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            fugiat quod officiis est consequuntur earum vitae adipisci sit porro
            tempora!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default Services
