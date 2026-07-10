import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { productSchema } from "../validation/productSchema";
import "../styles/AddProductPage.css";

const CATEGORIES = ["Clothing", "Shoes", "Accessories", "Electronics"];

const AddProductPage = ({ onAddProduct }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (data) => {
    const newProduct = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      category: data.category,
      image: data.image,
    };
    onAddProduct(newProduct);
    navigate("/");
  };

  return (
    <div className="add-product-page">
      <h2 className="add-product-title">Add New Product</h2>

      <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Product name"
            {...register("name")}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Price (DH)</label>
          <input
            type="number"
            placeholder="0.00"
            step="0.01"
            {...register("price")}
            className={errors.price ? "input-error" : ""}
          />
          {errors.price && <p className="error-msg">{errors.price.message}</p>}
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            {...register("category")}
            className={errors.category ? "input-error" : ""}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="error-msg">{errors.category.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            {...register("image")}
            className={errors.image ? "input-error" : ""}
          />
          {errors.image && <p className="error-msg">{errors.image.message}</p>}
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
