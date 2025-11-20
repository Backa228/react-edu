// src/pages/ProductDetails.jsx

import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product ID: {productId}</h2>
      <p>Here will be product details...</p>
    </div>
  );
};