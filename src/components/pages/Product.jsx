import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung S24" },
];

function Products () {
  return (
    <div>
        <h2>Продукти компанії</h2>
        <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
   
  );
}

export default Products;