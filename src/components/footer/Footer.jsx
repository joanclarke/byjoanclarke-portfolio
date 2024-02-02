import './footer.scss'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <hr />
        {/* <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
          <img src="/jc-logo-wht-pink2.png" alt="jc logo" />
        </motion.span> */}
        <div className="social">
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
        </div>
      </div>
    </div>
  )
}
export default Footer
