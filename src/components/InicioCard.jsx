import "./styles/InicioCard.css";

const InicioCard = () => {
  return (
    <main className="container-card">
      <section className="container-section">
        <div className="container-img">
          <img src="./img/hero.jpg" alt="" />
        </div>
        <br />
        <div className="container-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            vitae cupiditate tempora facere culpa facilis. Architecto, nostrum
            consequuntur iste ullam ratione soluta culpa sunt ea et dolorem non
            sapiente quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores, fuga voluptatum repellendus officia est
            facilis quasi id temporibus officiis voluptas quis perferendis, at
            blanditiis! Fugiat reprehenderit voluptatum dignissimos possimus
            temporibus.
          </p>
        </div>
        <br />
        <div className="container-social">
          <ul className="list-social">
            <li>
              <a href="#whatsapp">WhatsApp</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default InicioCard;
