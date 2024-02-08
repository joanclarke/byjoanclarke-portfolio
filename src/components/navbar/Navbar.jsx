import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src="/jc-logo-peach&blk.png" alt="jc logo" /> */}
          <img src="/jc-logo-wht-pink2.png" alt="jc logo" />
          <p>Joan Clarke</p>
        </motion.span>

        {/* <div className="social">
          <a href="https://www.linkedin.com/in/clarkejoan/" target="_blank">
            <img src="/linkedin.png" alt="linkedIn" />
          </a>
          <a href="https://www.instagram.com/iamjoanclarke/" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://twitter.com/joanclarke100" target="_blank">
            <img src="/twitter.png" alt="twitter" />
          </a>
          <a href="https://github.com/joanclarke" target="_blank">
            <img src="/github.png" alt="github logo" target="_blank" />
          </a>
        </div> */}
      </div>
    </div>
  )
}
export default Navbar
