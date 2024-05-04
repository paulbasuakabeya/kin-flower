import { number } from 'prop-types';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const FlowerDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupérer l'ID de la fleur depuis l'URL (paramètre de route)

  // Exemple de détails de fleur (remplacez par votre logique pour récupérer les détails de la fleur par ID)
  const flowerDetails = {
    name: '',
		category: '',
		id: '1bd',
		light: number,
		water: number,
		cover: '',
		price: number
    // Ajoutez d'autres détails de la fleur selon vos besoins
  };

  const handleGoBack = () => {
    navigate.goBack(); // Retourner à la page précédente
   
  };

  return (
    <div className="flower-details-page">
      <h2>{flowerDetails.name}</h2>
      <img src={flowerDetails.name} alt={flowerDetails.name} />
       {flowerDetails.category}
      {flowerDetails.cover}
      {flowerDetails.light}
      {flowerDetails.water}
      {flowerDetails.price}
      {/* Ajoutez d'autres détails de la fleur ici */}
      <button onClick={handleGoBack}>Retour</button>
    </div>
  );
};

export default FlowerDetailsPage;