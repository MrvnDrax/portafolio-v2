import ScrollAnimation from "react-animate-on-scroll";
import "./styles/ProyectosCard.css";

const ProyectosCard = () => {
  return (
    <section className="container" id="projects">
      <div className="all-container">
        <div className="container-title">
          <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut">
            <h2>Proyectos</h2>
            <p>Todos los proyectos fueron desarrollados usando React Js</p>
          </ScrollAnimation>
        </div>
        <div className="container-project">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="container-card">
              <a href="" className="anchor">
                <div className="container-text">
                  <h3>Pokédex</h3>
                </div>
                <div>
                  <img src="./img/p1.png" alt="" />
                </div>
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="container-card">
              <a href="">
                <div className="container-text">
                  <h3>Users CRUD</h3>
                </div>
                <div>
                  <img src="./img/p2.png" alt="" />
                </div>
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="container-card">
              <a href="">
                <div className="container-text">
                  <h3>Rick and Morty App</h3>
                </div>
                <div>
                  <img src="./img/p3.png" alt="" />
                </div>
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="container-card">
              <a href="">
                <div className="container-text">
                  <h3>App del clima</h3>
                </div>
                <div>
                  <img src="./img/p4.png" alt="" />
                </div>
              </a>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="container-card">
              <a href="">
                <div className="container-text">
                  <h3>Galleta de la fortuna</h3>
                </div>
                <div>
                  <img src="./img/p5.png" alt="" />
                </div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProyectosCard;
