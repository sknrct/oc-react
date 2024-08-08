import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../useFetch";
import "./cards.scss";

const Cards = () => {
  const {fetchedData = [], isLoading, error} = useFetch("/about.json");
  const navigate = useNavigate();
  const [cardsLoad, setNumCardsLoad] = useState(6); //On affiche 6 cards au chargement

  const moreCards = () => {
    setNumCardsLoad(cardsLoad + 6); // On affiche d'autres cards
  };

  useEffect(() => {
    window.scrollTo(0, 0); // On reste en haut de la page
  }, []);

  if (isLoading) {
    return null; // On affiche rien pendant le chargement
  }

  if (error) {
    navigate("/*");
    return null;
  }

return (
  <section className="mainContainer">
    <>
    {fetchedData.length > 0 && fetchedData.slice(0, cardsLoad).map((data) => (
      <figure key={data.id} className="card_container">
        <Link to={`/logements/${data.id}`} className="card">
          <img src={data.cover} alt={`Photo de ${data.title}`} className="card__img" 
          />
      <figcaption className="card__title">
        {data.title}
      </figcaption>
        </Link>
      </figure>
    ))}
    {fetchedData.length > cardsLoad && (
      <div className="container_button">
        <button value="Afficher plus" onClick={moreCards}>
          Afficher plus
        </button>
      </div>
    )}
    </>
  </section>
)
}

export default Cards;