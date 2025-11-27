// src/pages/ProductDetails.jsx

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product ID: {productId}</h2>
      {productId === '1' && <p>Details about iPhone 15...</p>}
      {productId === '2' && <p>Details about Samsung S24...</p>}
      {productId === '3' && <p>Details about Google Pixel 8...</p>}
      {productId === '4' && <p>Details about OnePlus 12...</p>}
      <p>Here will be product details...</p>
    </div>
  );
};

export default ProductDetails