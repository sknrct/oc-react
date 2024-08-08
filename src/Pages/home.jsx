import bannerHome from "../assets/banner-home.png";
import BannerTexte from "../Components/Banner/Banner";
import Cards from "../Components/Cards/Cards";

const Home = () => {
    document.title = "Kasa - Location d'appartement";

    return (
        <>
          <main>
            <BannerTexte
              imageUrl={bannerHome}
              title={
                <>
                  Chez vous, <span>partout et ailleurs</span>
                </>
              }
              opacity={0.6}
              isVisible={true}
            />
            <Cards />
          </main>
        </>
      );
    };
    
    export default Home;