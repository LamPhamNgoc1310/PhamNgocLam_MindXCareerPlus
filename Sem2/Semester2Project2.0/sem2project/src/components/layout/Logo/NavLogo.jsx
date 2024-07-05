import { NavLink } from "react-router-dom";
import "./NavLogo.css";
import logo from "../../../assets/cate2.png";
const NavLogo = () => {
  return (
    <div className="navbar-logo">
      <NavLink to="/" className="navbar-logo-link">
        <img
          className="navbar-logo-img"
          src={logo}
          alt="nah man img aint available rn"
        />
        <div className="navbar-logo-text">Catify</div>
      </NavLink>
    </div>
  );
};

export default NavLogo;
