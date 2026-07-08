import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.css";
import { FaGhost } from "react-icons/fa";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="not-found-code">
        {""}
        <FaGhost size="80px" /> 404
      </h1>
      <p className="not-found-message">Page not found.</p>
      <button className="not-found-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
