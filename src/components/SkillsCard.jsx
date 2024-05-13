import "./styles/SkillsCard.css";
import { motion } from "framer-motion";

const SkillsCard = () => {
  return (
    <section className="container-allSkills" id="skills">
      <div className="container-Skills">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className="container-list">
          <ul className="container-list-ul">
            <motion.li className="list-img" whileHover={{ scale: 1.2 }}>
              <img src="./assets/icons8-javascript-500.svg" alt="" />
            </motion.li>
            <motion.li className="list-img" whileHover={{ scale: 1.2 }}>
              <img src="./assets/icons8-css.svg" alt="" />
            </motion.li>
            <motion.li className="list-img" whileHover={{ scale: 1.2 }}>
              <img src="./assets/icons8-html-500.svg" alt="" />
            </motion.li>
            <motion.li className="list-img" whileHover={{ scale: 1.2 }}>
              <img src="./assets/icons8-react-native-500.svg" alt="" />
            </motion.li>
            <motion.li className="list-img" whileHover={{ scale: 1.2 }}>
              <img src="./assets/icons8-nodejs-500.svg" alt="" />
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
