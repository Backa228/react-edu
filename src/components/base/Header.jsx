import { NavLink } from "react-router-dom";
// import "./Header.css";
import { useUser } from "../../context/userContext";
import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//     return clsx('link', isActive && 'active')
// }

const Header = () => {
  const buildLinkClass  = ({ isActive }) =>
    isActive ? "link active" : "link";

  const { isLoggedIn, logIn, logOut } = useUser()

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
          <li>
            <NavLink to="/dashboard" className={buildLinkClass}>Робоча сторінка</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={buildLinkClass}>
            {isLoggedIn
            ? < button onClick={logOut}>Вийти з профілю</button>
            : <button onClike={logIn}>Увійти в профіль</button>}
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;