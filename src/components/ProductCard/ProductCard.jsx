import React from "react";
import "../../styles/ProductCard.css";
import "../../styles/Global.css";

const ProductCard = ({ product, onAddToCart, onRemoveFromCatalog }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">{product.price} €</p>

      <div className="product-actions">
        <button className="btn-add" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>

        <button
          className="btn-remove"
          onClick={() => onRemoveFromCatalog(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
