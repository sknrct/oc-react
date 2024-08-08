import bannerAbout from "../assets/banner-about.png";
import BannerTexte from "../Components/Banner/Banner";
import Collapse from "../Components/Collapse/Collapse";
import { useCollapse } from "../useCollapse";

const About = () => {
  const { isActive, setIsActive } = useCollapse();
  document.title = "Kasa - A propos de nous";
  const dataAbout = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },

    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      <main>
        <BannerTexte imageUrl={bannerAbout} title="none" opacity={0.3} isVisible={false} />
        <section className="section_about">
            {dataAbout.map((item, index) => (
                <Collapse
                key={`${item.title.replace(/[^\w\s]/gi, "").slice(0, 3)}${index}`}
                title={item.title}
                content=<p>{item.content}</p>
                index={item.title}
                isActive={isActive}
                setIsActive={setIsActive}
                />
            ))}
        </section>
      </main>
    </>
  );
};

export default About;
