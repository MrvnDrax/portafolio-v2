import { Link } from "react-router-dom";
import "./styles/NavBar.css";
const NavBar = () => {
  return (
    <header className="container-header">
      <nav className="container-nav">
        <div className="container-logo">
          <a className="logo" href="#em">
            Em.
          </a>
        </div>
        <div className="container-links">
          <ul className="container-links-ul">
            <li className="links-li">
              <a href="#home">INICIO</a>
            </li>
            <li className="links-li">
              <a href="#projects">PROYECTOS</a>
            </li>
            <li className="links-li">
              <a href="#skills">SKILLS</a>
            </li>
            <li className="links-li">
              <a href="#exp">EXPERIENCIA</a>
            </li>
            <li className="links-li">
              <a href="#edu">EDUCACIÓN</a>
            </li>
            <li className="links-li">
              <Link to="/contact">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
