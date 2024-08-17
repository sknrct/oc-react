import bannerAbout from "../assets/banner-about.png";
import BannerTexte from "../Components/Banner/Banner";
import Collapse from "../Components/Collapse/Collapse";
import { useCollapse } from "../useCollapse";
import dataAbout from "../assets/about.json";

const About = () => {
  const { isActive, setIsActive } = useCollapse();
  document.title = "Kasa - A propos de nous";
  
  return (
    <>
      <main>
        <BannerTexte imageUrl={bannerAbout} title="none" opacity={0.3} isVisible={false} />
        <section className="section_about">
            {dataAbout.map((item, index) => (
                <Collapse
                // On va chercher le titre de l'item 
                // /[^\w\s]/gi - On remplace les caractères qui ne sont pas des lettres, des chiffres ou espaces
                // slice(0, 3) on extrait les 3 premiers caractères "nettoyé" 
                // ca donne Fia0, Res1, Ser2, Sec3 - des clés pour chaque élément du tablo 
                key={`${item.title.replace(/[^\w\s]/gi, "").slice(0, 3)}${index}`}
                title={item.title}
                content={<p>{item.content}</p>}
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
