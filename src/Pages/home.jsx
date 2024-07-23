import bannerHome from "../assets/banner-home.png";
import BannerTexte from "../Composants/banner/banner";

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
          </main>
        </>
      );
    };
    
    export default Home;