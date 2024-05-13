import "./styles/ExpCard.css";

const ExpCard = () => {
  return (
    <section className="container-exp" id="exp">
      <div className="container-title">
        <h2>Mi Experiencia</h2>
      </div>
      <div className="container-list">
        <ul className="container-list-ul">
          <li className="list-li">
            <h3>Mi experiencia 2024-2024</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nulla animi dignissimos aliquam pariatur harum delectus quam
              aperiam voluptas atque ex obcaecati, laudantium doloribus maiores
              deserunt repellat minus, recusandae nesciunt.
            </p>
          </li>
          <li className="list-li">
            <h3>Mi experiencia 2024-2024</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            maiores, veniam tempora assumenda repellat nemo libero placeat, qui
            at eos, voluptatibus velit iste a. Necessitatibus tempora incidunt
            sed dolore tempore.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExpCard;
