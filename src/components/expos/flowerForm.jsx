
import React, { useState } from 'react';
import axios from 'axios';

const FlowerForm = ({ onSubmit }) => {
  const [flowerData, setFlowerData] = useState({
    nom: '',
    image: null,
    prix: '',
    couleur: '',
    categories: '',
    type: 'naturel',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlowerData({ ...flowerData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFlowerData({ ...flowerData, image: imageFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nom', flowerData.nom);
    formData.append('image', flowerData.image);
    formData.append('prix', flowerData.prix);
    formData.append('couleur', flowerData.couleur);
    formData.append('categories', flowerData.categories);
    formData.append('type', flowerData.type);

    try {
      const response = await axios.get('http://localhost:3000/api/stuff', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onSubmit(response.data); // Appeler la fonction onSubmit avec les données de la fleur enregistrée
      setFlowerData({
        nom: '',
        image: null,
        prix: '',
        couleur: '',
        categories: '',
        type: 'naturel',
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'une nouvelle fleur :', error);
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ 
      backgroundImage: "url('src/assets/calathea.jpg')"
    }}>
      <div className="max-w-md p-6 bg-green-400 shadow-lg rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Flower</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-600">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={flowerData.nom}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image (Télécharger)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prix" className="block text-sm font-medium text-gray-600">
            Prix
          </label>
          <div className="flex items-center mt-1">
            <select
              name="prix"
              value={flowerData.prix}
              onChange={handleChange}
              required
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black mr-2"
            >
              <option value="$">USD ($)</option>
              <option value="FC">FCFA (FC)</option>
            </select>
            <input
              type="number"
              name="montant"
              value={flowerData.montant}
              onChange={handleChange}
              required
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="couleur" className="block text-sm font-medium text-gray-600">
            Couleur
          </label>
          <select
            id="couleur"
            name="couleur"
            value={flowerData.couleur}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          >
            <option value="rouge">Rouge</option>
            <option value="bleu">Bleu</option>
            <option value="vert">Vert</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="categories" className="block text-sm font-medium text-gray-600">
            Catégories
          </label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={flowerData.categories}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-600">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={flowerData.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          >
            <option value="naturel">Naturel</option>
            <option value="artificiel">Artificiel</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Flower
        </button>
      </form>
    </div>
    </div>

  );
};

export default FlowerForm;

