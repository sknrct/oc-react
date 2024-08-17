import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logementsData from "../../assets/logements.json"; // Importation directe des données JSON
import "./cards.scss";

const Cards = () => {
  const [cardsLoad, setNumCardsLoad] = useState(6); // On affiche 6 cards au chargement
  const navigate = useNavigate();

  const moreCards = () => {
    setNumCardsLoad(cardsLoad + 6); // On affiche d'autres cards
  };

  useEffect(() => {
    window.scrollTo(0, 0); // On reste en haut de la page
  }, []);

  if (!logementsData || logementsData.length === 0) {
    navigate("/error");
    return null;
  }

  return (
    <section className="mainContainer">
      <>
        {logementsData.slice(0, cardsLoad).map((data) => (
          <figure key={data.id} className="card_container">
            <Link to={`/logements/${data.id}`} className="card">
              <img
                src={data.cover}
                alt={`${data.title}`}
                className="card__img"
              />
              <figcaption className="card__title">{data.title}</figcaption>
            </Link>
          </figure>
        ))}
        {logementsData.length > cardsLoad && (
          <div className="container_button">
            <button value="Afficher plus" onClick={moreCards}>
              Afficher plus
            </button>
          </div>
        )}
      </>
    </section>
  );
};

export default Cards;