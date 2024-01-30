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
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Navbar
