import { Outlet } from "react-router-dom";
import "./Layout.css";
import HomeNavBar from "../layout/HomeNavBar";
import MusicPlayer from "../layout/MusicPlayer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="homeNavBar">
        <HomeNavBar />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
      
      <div className="musicPlayer">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Layout;
