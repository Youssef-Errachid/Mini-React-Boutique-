import React from "react";
import "../../styles/CartItem.css";

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">{item.price} €</p>
      </div>

      <button
        className="btn-remove-cart"
        onClick={() => onRemoveFromCart(item.id)}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
