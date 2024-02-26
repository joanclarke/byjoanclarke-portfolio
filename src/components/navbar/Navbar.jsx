import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      {/* logo */}
      {/* <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/jc-logo-wht-pink2.png" alt="jc logo" />
          <p>Joan Clarke</p>
        </motion.span>
      </div> */}
    </div>
  )
}
export default Navbar
