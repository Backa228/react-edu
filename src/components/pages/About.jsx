import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx('link', isActive && 'active')
}

function About() {
    return (
      <div> 
        <ul className='routerList'>
          <li>
            <NavLink to="mission" className={buildLinkClass}>Наша місія</NavLink>
          </li>
          <li>
            <NavLink to="team" className={buildLinkClass}>Наша команда</NavLink>
          </li>
          <li>
            <NavLink to="review" className={buildLinkClass}>Наші відгуки</NavLink>
          </li>
        </ul>
        <h2>Про нас</h2>   
        <Outlet />
      </div>
  );
}

export default About;