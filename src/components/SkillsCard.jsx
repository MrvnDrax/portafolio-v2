import "./styles/SkillsCard.css";

const SkillsCard = () => {
  return (
    <section className="container-allSkills">
      <div className="container-Skills">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div className="container-list">
          <ul className="container-list-ul">
            <li className="list-img">
              <img src="./assets/icons8-javascript-500.svg" alt="" />
            </li>
            <li className="list-img">
              <img src="./assets/icons8-css.svg" alt="" />
            </li>
            <li className="list-img">
              <img src="./assets/icons8-html-500.svg" alt="" />
            </li>
            <li className="list-img">
              <img src="./assets/icons8-react-native-500.svg" alt="" />
            </li>
            <li className="list-img">
              <img src="./assets/icons8-nodejs-500.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
