import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRouter = ({
  products,
  selectedCategory,
  setSelectedCategory,
  categories,
  onAddToCart,
  onRemoveFromCatalog,
  onAddProduct,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            onAddToCart={onAddToCart}
            onRemoveFromCatalog={onRemoveFromCatalog}
          />
        }
      />

      <Route
        path="/add-product"
        element={<AddProductPage onAddProduct={onAddProduct} />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
