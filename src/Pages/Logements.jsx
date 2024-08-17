import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../Components/Carousel/Carousel";
import logementsData from "../assets/logements.json"; // Importation directe des données JSON et pas avec useFetch
import Description from "../Components/LogementInfos/LogementInfos";

const Logements = () => {
  const { logementId } = useParams();
  const navigate = useNavigate();

  // Trouver le logement correspondant à l'ID
  const currentLogement = logementsData.find((item) => item.id === logementId);

  useEffect(() => {
    // Si aucune donnée n'est trouvée ou qu'il y a une erreur, rediriger vers la page d'erreur
    if (!currentLogement) {
      console.log("Redirecting to /error");
      navigate("/error");
    }
    // Assurer que le scroll est positionné en haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, [currentLogement, navigate]);

  // Si aucune donnée n'est trouvée, afficher un message d'erreur
  if (!currentLogement) {
    return <div>Error or No data found</div>;
  }

  // Mettre à jour le titre du document
  document.title = `Kasa - ${currentLogement.title}`;

  return (
    <main>
      <Carousel
        key={currentLogement.id}
        id={currentLogement.id}
        cover={currentLogement.cover}
        title={currentLogement.title}
        pictures={currentLogement.pictures}
      />
      <Description currentLogement={currentLogement} />
    </main>
  );
}

export default Logements;
