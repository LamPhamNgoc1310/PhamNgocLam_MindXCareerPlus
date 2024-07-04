import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "/Users/lampham_1310/Programming/VSCode/XCareer/PhamNgocLam_MindXCareerPlus/Sem2/Semester2Project2.0/sem2project/src/assets/cate2.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            className="navbar-logo-img"
            src={logo}
            alt="nah man img aint available rn"
          />
        </NavLink>
      </div>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink activeClassName="navbar-li-navlink-active" to="/home">
            Home
          </NavLink>
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
