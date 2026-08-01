# React Mini Boutique

A React-based mini shop application developed in two stages — starting with core React fundamentals and evolving into a fully routed, form-validated application.

## Overview

This project simulates a small online shop where users can browse products, filter by category, manage a shopping cart, and add new products through a validated form. It was built as a progressive learning project to practice essential React concepts, from component communication and state management to routing and form validation.

## Features

### Part 1 — Core Shop Functionality
- Product catalog displaying name, price, category, and image
- Filter products by category
- Add products to a shopping cart
- View cart contents: added products, total item count, and total amount
- Remove a product from the cart
- Remove a product from the catalog (in-memory only, does not affect the source data)
- Product and cart data managed entirely with React state (`useState`) and `Props` — no backend or API calls
- Data loaded from a local JSON file (`src/data/products.json`)

### Part 2 — Navigation & Forms
- Multi-page navigation using **React Router** (`BrowserRouter`, `Route`, `Link` / `NavLink`, `useNavigate`)
- Custom 404 page for unmatched routes
- "Add Product" page with a fully validated form
- Form built with **React Hook Form** and validated with **Yup**
- Validation rules:
  - Name is required
  - Price must be greater than 0
  - Category is mandatory
  - Image URL must be valid
- Real-time error messages displayed under each invalid field
- Newly added products appear immediately in the catalog

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, JavaScript, Vite |
| Routing | React Router |
| Forms & Validation | React Hook Form, Yup |
| Data | Local JSON file |
| Styling | CSS |

## React Concepts Practiced

- Component composition: `Header`, `ProductList`, `ProductCard`, `CategoryFilter`, `Cart`, `CartItem`, `Footer`
- Page-level routing with `AppRouter.jsx`: `HomePage`, `ProductDetails`, `AddProductPage`, `NotFoundPage`
- Centralized validation schema with Yup in `validation/productSchema.js`
- `Props` for parent-child communication and passing functions between components
- `useState` for managing products, cart, selected category, and totals
- Conditional rendering, `map()`, and `filter()` for dynamic rendering
- Event handling with `onClick` and `onChange`
- Client-side routing with React Router
- Controlled forms with React Hook Form and schema-based validation with Yup

## Project Structure

```
src/
├── App.css
├── App.jsx
├── AppRouter.jsx
├── index.css
├── main.jsx
│
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
│
├── components/
│   ├── Cart/
│   │   └── Cart.jsx
│   ├── CartItem/
│   │   └── CartItem.jsx
│   ├── CategoryFilter/
│   │   └── CategoryFilter.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── ProductCard/
│   │   └── ProductCard.jsx
│   └── ProductList/
│       └── ProductList.jsx
│
├── data/
│   └── products.json
│
├── pages/
│   ├── AddProductPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   └── ProductDetails.jsx
│
├── styles/
│   ├── AddProductPage.css
│   ├── Cart.css
│   ├── CartItem.css
│   ├── CategoryFilter.css
│   ├── Footer.css
│   ├── Global.css
│   ├── Header.css
│   ├── NotFoundPage.css
│   ├── ProductCard.css
│   └── ProductList.css
│
└── validation/
    └── productSchema.js
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Youssef-Errachid/Mini-React-Boutique.git

# Navigate to the project folder
cd Mini-React-Boutique

# Install dependencies
npm install

# Run the development server
npm start
```

The app will be available at `http://localhost:3000`.

## Bonus Features (Optional Enhancements)

- Product search
- Quantity management in the cart
- "Empty cart" message when no items are added
- Dark mode

## Author

**Youssef Errachidi**
Full Stack Java Developer
[GitHub](https://github.com/Youssef-Errachid) • [LinkedIn](https://www.linkedin.com/in/youssef-errachid/)
