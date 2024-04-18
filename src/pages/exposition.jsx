

/*function Exposition (){
 return(
 
  <div>
    <p>Achats et Ventes</p>
    <p>Cher(e)s Clients ici c'est une espace reservé pour acheter ou exposer vos Fleurs</p>
  </div>
  
 )
}
export default Exposition;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exposition = () => {
  const navigate = useNavigate();

  const handlePageOneClick = () => {
    // Rediriger l'utilisateur vers la page '/page1' lors du clic sur le premier bouton
    navigate("/flowerList");
  };

  const handlePageTwoClick = () => {
    // Rediriger l'utilisateur vers la page '/page2' lors du clic sur le deuxième bouton
    navigate("/ajouterFleurs");
  };

  return ( 
   <div className="flex flex-col justify-center items-center h-screen bg-form-texture">
      {/* Section principale */}
      {/* <div className="max-w-md p-8 bg-custom-gray rounded-lg mb-6 text-center">
        <p className="text-xl font-semibold text-gray-800 mb-4">Achats et Ventes</p>
      </div> */}
      <div className="max-w-md p-6 bg-custom-gray shadow-lg rounded-lg mb-8 text-center">
        <p className="text-sm text-gray-600">Cher(e)s Clients, ceci est un espace réservé pour acheter ou exposer vos fleurs.</p>
      </div>

      {/* Boutons de navigation */}
      <div className="max-w-md p-6 bg-custom-gray shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sélectionnez une action :</h2>
        <button
          onClick={handlePageOneClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Acheter
        </button>
        <button
          onClick={handlePageTwoClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Vendre
        </button>
      </div>
    </div>
  );
};

export default Exposition;