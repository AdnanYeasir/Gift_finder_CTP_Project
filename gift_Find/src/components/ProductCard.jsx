// src/components/ProductCard.jsx
import React from 'react';
//import '../styles/ProductCard.css'; // Make sure you have corresponding CSS for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      {/* Add more product details here if needed */}
    </div>
  );
};

export default ProductCard;
