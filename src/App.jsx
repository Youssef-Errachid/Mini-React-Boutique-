import React, { useState } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCatalog = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Header cartCount={cart.length} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductList
        products={products}
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
        onRemoveFromCatalog={removeFromCatalog}
      />

      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
