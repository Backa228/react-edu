import { Link, useNavigate, useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung S24" },
  { id: 3, name: "Google Pixel 8" },
  { id: 4, name: "OnePlus 12" },
  { id: 5, name: "iPhone 17" },
  { id: 6, name: "Samsung Galaxy S25" },
  { id: 7, name: "Google Pixel 9" },
];

function Products() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ""

  const updateSearch = (value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams); 
    
    // 2. Оновлюємо певний ключ
    updatedParams.set("search", value); 
    
    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  }

  const filtered = products.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )
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

      <input
        type="text"
        value={search}
        placeholder="Search product..."
        onChange={(e) => updateSearch(e.target.value)}
      />

      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            <Link to={(`products/${p.id}`)}>{p.name}</Link>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/about/team")}>Про нас</button>
    </div>
   
  );
}

export default Products;