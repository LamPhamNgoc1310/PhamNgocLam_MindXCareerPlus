import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NavLogo from "./Logo/NavLogo";
export default function NavBar() {
  return (
    <div className="navbar">
      <NavLogo />
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ul className="navbar-ul-right">
        <li className="navbar-li">
          <NavLink to="/signin">Signin</NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}
