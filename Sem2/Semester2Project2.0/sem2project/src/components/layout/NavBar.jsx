import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Hello</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Signin</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>
    </div>
  );
}
