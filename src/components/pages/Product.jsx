import { Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", brand: "Apple", price: 1200 },
  { id: 2, name: "Samsung S24", brand: "Samsung", price: 1100 },
  { id: 3, name: "Google Pixel 8", brand: "Google", price: 900 },
  { id: 4, name: "OnePlus 12", brand: "OnePlus", price: 800 },
  { id: 5, name: "iPhone 17", brand: "Apple", price: 1500 },
  { id: 6, name: "Samsung Galaxy S25", brand: "Samsung", price: 1300 },
  { id: 7, name: "Google Pixel 9", brand: "Google", price: 1000 },
];

function Products() {
  const location = useLocation()
  console.log(location)
  console.log(location.state)

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ""
  const brand = searchParams.get("brand") || ""
  const maxPrice = searchParams.get("maxPrice") || ""

  const updateSearch = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams); 
    
    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value); 
    
    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  }

  const filtered = products
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => brand ? item.brand === brand : true)
    .filter(item => maxPrice ? item.price <= parseInt(maxPrice) : true)
   
  return (
    <div>
        <h2>Продукти компанії</h2>
        <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`} state={{ from: `/products?${searchParams.toString()}` }}>{p.name}</Link>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={search}
        placeholder="Search product..."
        onChange={(e) => updateSearch("search", e.target.value)}
      />

      <select name="" id="" value={brand} onChange={(e) => (updateSearch("brand", e.target.value))}>
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Google">Google</option>
        <option value="OnePlus">OnePlus</option>
      </select>

      <input
        type="range"
        min="600"
        max="2000"
        step="50"
        value={maxPrice}
        onChange={(e) => (updateSearch("maxPrice", e.target.value))}/>

      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            <Link to={`products/${p.id}`} state={{ from: `/products?${searchParams.toString()}` }}>{p.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/about/team")}>Про нас</button>
    </div>
   
  );
}

export default Products;