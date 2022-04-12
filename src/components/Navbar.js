import { NavLink, Link } from 'react-router-dom';
import IconLogo from '../assets/img/logo.jpg';

export const Navbar = () => {

  return (
    <nav className="navbar__content">
      <div>
        <Link to="/">
          <img className="navbar__logo" src={IconLogo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar__header">
        <li className="navbar__link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Inicio
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Recetas
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Conócenos
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "isActive" : null)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
