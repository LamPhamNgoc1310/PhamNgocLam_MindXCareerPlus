import NavBar from "../layout/NavBar";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <NavBar />
      <div className="about-body">
        <div className="about-body-content">
          <h2>About Catify</h2>
          <p>Author: Pham ngoc Lam</p>
          <p>Number of pages: 5</p>
          <p>Javascript uses:</p>
          <ul className="about-ul">
            <li>Log in</li>
            <li>Sign in</li>
            <li>Play Music</li>
            <li>Change Songs</li>
            <li>Storing songs data in list</li>
          </ul>
        </div>
          <p>®Student template, help from Phind and ChatGPT</p>
      </div>
    </div>
  );
};

export default About;
