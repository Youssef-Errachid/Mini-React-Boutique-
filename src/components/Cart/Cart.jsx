import React from "react";
import CartItem from "../CartItem/CartItem";
import "../../styles/Cart.css";

const Cart = ({ cart, removeFromCart, showCart, setShowCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-sidebar ${showCart ? "open" : ""}`}>
      <div className="cart-header">
        <h2>🛒 Mon Panier</h2>
        <button className="btn-close-cart" onClick={() => setShowCart(false)}>
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Votre panier est vide</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemoveFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-summary">
            <p>
              Total Articles: <strong>{cart.length}</strong>
            </p>
            <p>
              Total: <strong>{total.toFixed(2)} DH</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
