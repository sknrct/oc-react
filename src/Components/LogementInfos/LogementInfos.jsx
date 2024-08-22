import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "../Collapse/Collapse";
import "./logementInfos.scss";

const Description = ({ currentLogement }) => {
  const [activeCollapse, setActiveCollapse] = useState(null);

  const handleCollapseToggle = (index) => {
    setActiveCollapse(activeCollapse === index ? null : index);
  };

  // Convertir le rating en nombre
  const numericRating = parseFloat(currentLogement.rating);

  return (
    <section className="description">
      <div className="top">
        <div className="titles">
          <h1>{currentLogement.title}</h1>
          <p>{currentLogement.location}</p>
          <div className="tags">
            {currentLogement.tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="test">
            <p>
              {currentLogement.host.name.split(" ")[0]}
              <br />
              {currentLogement.host.name.split(" ")[1]}
            </p>
            <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
          </div>
          {currentLogement.rating && (
            <div className="rating">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <span
                    key={i}
                    className="fas fa-star"
                    style={{
                      color: ratingValue <= numericRating ? "#ff6060" : "#e3e3e3",
                    }}
                  ></span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="collapses">
        <Collapse
          key={currentLogement.id + 1}
          title="Description"
          content={
            currentLogement.description ? <p>{currentLogement.description}</p> : <p>Aucune description disponible</p>
          }
          index={currentLogement.id}
          isActive={activeCollapse === currentLogement.id}
          setIsActive={() => handleCollapseToggle(currentLogement.id)}
        />
        <Collapse
          key={currentLogement.id + 2}
          title="Équipements"
          content={
            currentLogement.equipments ? (
              <ul>
                {currentLogement.equipments.map((equipment, index) => (
                  <li key={index}>
                    <span style={{ color: "#ff6060" }}></span>
                    {"  "}
                    {equipment}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucun équipement disponible</p>
            )
          }
          index={currentLogement.id}
          isActive={activeCollapse === currentLogement.id + 1}
          setIsActive={() => handleCollapseToggle(currentLogement.id + 1)}
        />
      </div>
    </section>
  );
};

Description.propTypes = {
  currentLogement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number,
    description: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Description;
