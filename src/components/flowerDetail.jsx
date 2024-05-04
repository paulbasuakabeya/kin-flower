import React from 'react';

const FlowerDetails = ({ flower, onDelete, onEdit }) => {
  const { cover, name, water, light, price, category } = flower;

  return (
    <div className="flower-details">
      <img src={cover} alt={name} className="flower-cover" />
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Water: {water}</p>
      <p>Light: {light}</p>
      <p>Price: {price}</p>
      <div>
        <button onClick={onDelete}>Supprimer</button>
        <button onClick={onEdit}>Modifier</button>
      </div>
    </div>
  );
};

export default FlowerDetails;

