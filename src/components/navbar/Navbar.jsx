import { useContext, useState } from "react"
import { IsMobileContext } from "../../utilis/isMobileContext"
import { motion } from 'framer-motion';
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const {isMobile} = useContext(IsMobileContext)
  const links = [
    {id:1, link: "home",  isActive: true },
    {id:2, link: "about"},
    {id:3, link: "movies"},
    {id:4, link: "contact"},
  ]
  return (
    <nav>
      

      <div className="logo">
        <motion.img initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0, duration:1 , staggerChildren: 0.25}}   src="src/assets/images/logo.png" alt="" />
      </div>
      {!isMobile && <>
        <div className="menu">
        <ul>
          {links.map((link,index)=>
          (  <motion.a initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0, duration:1 , staggerChildren: 0.25}}  key={index} href="" className={link.isActive ? "active" : ""}>{link.link}</motion.a>)
          )}
        </ul>
      </div>

      <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0, duration:1 , staggerChildren: 0.25}}  className="btn">
          <button>get started</button>
        </motion.div>
      </>}
      {isMobile && <>
        <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0, duration:1 , staggerChildren: 0.25}}  onClick={()=>{setActiveMenu(!activeMenu)}} className="bar">
        <div></div>
        <div></div>
      </motion.div>
      <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0, duration:1 , staggerChildren: 0.25}}    className={`mobile-menu ${activeMenu? "active": ""}`}>
      <ul>
          {links.map((link,index)=>
          (  <a   key={index} href="" className={link.isActive? "active": ""}>{link.link}</a>)
          )}
        </ul> 
      </motion.div>
      </>}
    
      
    </nav>
  )
}

export default Navbar