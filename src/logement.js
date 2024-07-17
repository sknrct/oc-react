import React from 'react';
import logementData from './logement.json';

const Logement = () => {
  return (
    <div>
      <h1>{logementData.title}</h1>
      <img src={logementData.cover} alt={logementData.title} />
      <p>{logementData.description}</p>
      <h2>Host: {logementData.host.name}</h2>
      <img src={logementData.host.picture} alt={logementData.host.name} />
      <h3>Location: {logementData.location}</h3>
      <p>Rating: {logementData.rating}</p>
      <h4>Equipments:</h4>
      <ul>
        {logementData.equipements.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h4>Tags:</h4>
      <ul>
        {logementData.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logement;
