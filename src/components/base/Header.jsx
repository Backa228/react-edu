import { NavLink } from "react-router-dom";
// import "./Header.css";
import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//     return clsx('link', isActive && 'active')
// }
  
const Header = () => {
  const buildLinkClass  = ({ isActive }) =>
    isActive ? "link active" : "link";

  return (
    <header>
       <nav>
        <ul className='routerList'>
          <li>
            <NavLink to="/" className={buildLinkClass}>Головна</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={buildLinkClass}>Про нас</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={buildLinkClass}>Контакти</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={buildLinkClass}>Продукти компанії</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;