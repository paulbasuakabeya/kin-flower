import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlantItem from './PlantItem';
import FlowerDetails from './flowerDetail';
import { plantList } from '../datas/plantList'


const ShoppingListTwo = ({ categories, plantList, setActiveCategory, activeCategory }) => {
  const navigate = useNavigate();
  const [selectedFlower, setSelectedFlower] = useState(null);

  const handleDoubleClick = (flower) => {
    setSelectedFlower(flower);
    navigate(`/flower/${flower.id}`); // Naviguer vers la page des détails de la fleur
  };

  const addToCart = (name, price) => {
    console.log(`Ajout de "${name}" au panier avec un prix de ${price}`);
  };

  return (
    <div className='lmj-shopping-list mt-14'>
      {/* Composant Categories pour filtrer les plantes par catégorie */}
      {/* Liste des plantes */}
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id} onDoubleClick={() => handleDoubleClick({ id, cover, name, water, light, price, category })}>
              <PlantItem cover={cover} name={name} price={price} />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>

      {/* Affichage des détails de la fleur sélectionnée */}
      {selectedFlower && <FlowerDetails flower={selectedFlower} />}
    </div>
  );
};

export default ShoppingListTwo;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PlantItem from './PlantItem';
// import FlowerDetails from './flowerDetail';

// const ShoppingListTwo = ({ categories, PlantItem, setActiveCategory, activeCategory }) => {
//   const navigate = useNavigate();
//   const [selectedFlower, setSelectedFlower] = useState(null);

//   const handleDoubleClick = (flower) => {
//     setSelectedFlower(flower);
//     navigate(`/flower/${flower.id}`); // Naviguer vers la page des détails de la fleur
//   };

//   const addToCart = (name, price) => {
//     console.log(`Ajout de "${name}" au panier avec un prix de ${price}`);
//   };

//   return (
//     <div className='lmj-shopping-list mt-14'>
//       {/* Composant Categories pour filtrer les plantes par catégorie */}
//       {/* Liste des plantes */}
//       <ul className='lmj-plant-list'>
//         {PlantItem.map(({ id, cover, name, water, light, price, category }) =>
//           !activeCategory || activeCategory === category ? (
//             <div key={id} onDoubleClick={() => handleDoubleClick({ id, cover, name, water, light, price, category })}>
//               <PlantItem cover={cover} name={name} price={price} />
//               <button onClick={() => addToCart(name, price)}>Ajouter</button>
//             </div>
//           ) : null
//         )}
//       </ul>

//       {/* Affichage des détails de la fleur sélectionnée */}
//       {selectedFlower && <FlowerDetails flower={selectedFlower} />}
//     </div>
//   );
// };

// export default ShoppingListTwo;



// import React, { useState } from 'react';
// import PlantItemTwo from './plantItemTwo'; 
// import FlowerDetails from './flowerDetail'; 
// // import Categories from './Categories';
// import { plantList } from '../datas/plantList'

// const ShoppingListTwo = ({ categories, setActiveCategory, activeCategory }) => {
//   const [selectedFlower, setSelectedFlower] = useState(null);

//   const handleDoubleClick = (flower) => {
//     setSelectedFlower(flower);
//   };

//   const addToCart = (name, price) => {
    
//     console.log(`Ajout de "${name}" au panier avec un prix de ${price}`);
//   };

//   return (
//     <div className='lmj-shopping-list mt-14'>
     
//       {/* <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} /> */}

      
//       <ul className='lmj-plant-list'>
//         {plantList.map(({ id, cover, name, water, light, price, category }) =>
//           !activeCategory || activeCategory === category ? (
//             <div key={id} onDoubleClick={() => handleDoubleClick({ id, cover, name, water, light, price, category })}>
//               <PlantItemTwo cover={cover} name={name} price={price} />
//               <button onClick={() => addToCart(name, price)}>Ajouter</button>
//             </div>
//           ) : null
//         )}
//       </ul>

//       {/* Affichage des détails de la fleur sélectionnée */}
//       {selectedFlower && (
//         <FlowerDetails
//           flower={selectedFlower}
//           onDelete={() => {
            
//             console.log(`Suppression de "${selectedFlower.name}"`);
//             setSelectedFlower(null);
//           }}
//           onEdit={() => {
            
//             console.log(`Modification de "${selectedFlower.name}"`);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ShoppingListTwo;