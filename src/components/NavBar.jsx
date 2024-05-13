import "./styles/NavBar.css";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <header className="container-header">
      <nav className="container-nav">
        <div className="container-logo">
          <a className="logo" href="#home">
            Em<span className="dot">.</span>
          </a>
        </div>
        <div className="container-links">
          <ul className="container-links-ul">
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                transition: { duration: 0.1, ease: "anticipate" },
                scaleX: 1.1,
                scaleY: 1.1,
              }}
              className="links-li"
            >
              <a href="#home">INICIO</a>
            </motion.li>
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="links-li"
            >
              <a href="#projects">PROYECTOS</a>
            </motion.li>
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                transition: { duration: 0.1, ease: "anticipate" },
                scaleX: 1.1,
                scaleY: 1.1,
              }}
              className="links-li"
            >
              <a href="#skills">SKILLS</a>
            </motion.li>
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                transition: { duration: 0.1, ease: "anticipate" },
                scaleX: 1.1,
                scaleY: 1.1,
              }}
              className="links-li"
            >
              <a href="#exp">EXPERIENCIA</a>
            </motion.li>
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                transition: { duration: 0.1, ease: "anticipate" },
                scaleX: 1.1,
                scaleY: 1.1,
              }}
              className="links-li"
            >
              <a href="#edu">EDUCACIÓN</a>
            </motion.li>
            <motion.li
              whileHover={{
                backgroundColor: "#a9f04d",
                transition: { duration: 0.1, ease: "anticipate" },
                scaleX: 1.1,
                scaleY: 1.1,
              }}
              className="links-li"
            >
              <a href="contact">CONTACTO</a>
            </motion.li>
          </ul>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
};

export default NavBar;
