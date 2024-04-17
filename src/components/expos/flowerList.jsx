
// import React, { useState } from 'react';
// import FlowerForm from './flowerForm'; // Assurez-vous de corriger le chemin d'import si nécessaire
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FlowerList = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios.post('mongodb+srv://kinflower:kinflower@openclass.z9kv2xm.mongodb.net/?retryWrites=true&w=majority&appName=openclass')
      .then(response => {
        setFlowers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des fleurs :', error);
      });
  }, []);
  // const [flowers, setFlowers] = useState([]);

  // const addFlower = (flowerData) => {
  //   setFlowers([...flowers, flowerData]);
  // };

  return (
    <div className="container mx-auto mt-8">
      {/* <FlowerForm onSubmit={addFlower} /> */}
      <hr className="my-8" />
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Liste des Fleurs</h2>
      <ul>
        {flowers.map((flower, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-medium">{flower.nom}</h3>
            <img src={URL.createObjectURL(flower.image)} alt={flower.nom} className="max-w-sm mt-2" />
            <p className="text-gray-700">Prix: {flower.prix} {flower.montant}</p>
            <p className="text-gray-700">Couleur: {flower.couleur}</p>
            <p className="text-gray-700">Catégories: {flower.categories}</p>
            <p className="text-gray-700">Type: {flower.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlowerList;