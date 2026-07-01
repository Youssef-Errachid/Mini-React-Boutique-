import React from "react";
import "../../styles/Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>

          <div className="cart-summary">
            <p>
              Total items: <strong>{cart.length}</strong>
            </p>
            <p>
              Total amount: <strong>{totalAmount.toFixed(2)} €</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
