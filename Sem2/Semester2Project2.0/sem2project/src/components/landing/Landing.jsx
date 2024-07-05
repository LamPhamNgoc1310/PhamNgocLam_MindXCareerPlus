import NavBar from "../layout/NavBar";
import catBg from "../../assets/cat-bg.gif";
import "./Landing.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <NavBar />
      <div className="landing-banner">
        <img src={catBg} alt="" />
        <div className="banner-text">Listen to your favourite Meow-sic!</div>
        <div className="banner-btn">
          <NavLink to="/signin">Join Now!</NavLink>
        </div>
      </div>

      <div className="landing-footer">
        <div>® A student template</div>
        <a href="https://shorturl.at/nOauk">Github</a>
      </div>
    </div>
  );
}
