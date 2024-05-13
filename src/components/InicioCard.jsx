import { motion } from "framer-motion";
import "./styles/InicioCard.css";

const InicioCard = () => {
  return (
    <main className="container-card">
      <section className="container-section">
        <br id="home" />
        <div className="container-name">
          <motion.h1 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Emiliano Meza<span className="dot">.</span>
          </motion.h1>
          <motion.h3
            className="h3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
          >
            Front-end <span className="junior">Junior</span>
          </motion.h3>
        </div>
        {/* <div>
          <motion.img
            src="./img/React-icon.svg.png"
            alt=""
            className="div"
            animate={{
              scale: [0.9, 1.5, 1.5, 1, 0.9],
              rotate: [0, 0, 270, 270, 0],
              // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1, 1.2],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div> */}
        <br />
        <div className="container-info">
          <p>
            <span className="span">¡Hola! Soy Emiliano Meza</span>, un
            estudiante de 23 años apasionado por la programación y el desarrollo
            web. Desde noviembre de 2023, me he sumergido en un emocionante
            viaje al inscribirme en un bootcamp de Desarrollo Web Full Stack,
            donde cada día descubro nuevas posibilidades y desafíos que me
            inspiran a crecer y aprender más.
          </p>
          <br />
          <p>
            Mi objetivo es construir una carrera sólida en el campo del
            desarrollo de software, combinando mis habilidades técnicas con una
            sensibilidad artística para crear experiencias digitales funcionales
            y estéticamente atractivas. Estoy emocionado por las oportunidades
            que el futuro tiene reservadas y ansioso por seguir explorando,
            aprendiendo y creciendo en el vasto y emocionante mundo de la
            tecnología y el desarrollo web.
          </p>
        </div>
        <br />
        <div className="container-social">
          <ul className="list-social">
            <li className="list-links">
              <a className="whatsapp" href="#whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="list-links">
              <a className="linkedin" href="#linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list-links">
              <a className="twitter" href="#twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default InicioCard;
