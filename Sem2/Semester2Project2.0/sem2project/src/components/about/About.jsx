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
            <li>1. Log in</li>
            <li>2. Sign in</li>
            <li>3. Displaying songs name and artists</li>
            <li>4. Play Songs</li>
            <li>5. Change Songs</li>
            <li>6. Storing songs data in list</li>
            <li>7. Creating new playlist</li>
            <li>8. Navigation in outlet tag</li>
            <li>9. Showing songs progress</li>
            <li>10. Seeking songs progress</li>
            <li>11. Changing volume</li>
          </ul>
        </div>
        <p>®Student template, help from Phind and ChatGPT</p>
      </div>
    </div>
  );
};

export default About;
