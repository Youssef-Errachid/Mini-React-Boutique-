import React, { useState } from "react";
import productsData from "./data/products.json";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (productId) =>
    setCart(cart.filter((item) => item.id !== productId));
  const removeFromCatalog = (productId) =>
    setProducts(products.filter((p) => p.id !== productId));
  const addProduct = (newProduct) => setProducts([...products, newProduct]);

  return (
    <div>
      <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />

      <AppRouter
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        onAddToCart={addToCart}
        onRemoveFromCatalog={removeFromCatalog}
        onAddProduct={addProduct}
      />

      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)} />
      )}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <Footer />
    </div>
  );
};

export default App;
