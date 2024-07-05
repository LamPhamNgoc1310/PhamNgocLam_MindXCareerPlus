import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HomeNavBar.css";
import NavLogo from "./Logo/NavLogo";
import { useAuth } from "../../context/authContext";

const HomeNavBar = () => {
  const { currentUser } = useAuth();
  const [input, setInput] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [itemList, setItemList] = useState([
    {
      id: 1,
      path: "/home/liked",
      title: "Liked songs",
      songs: [],
    },
  ]);

  function addPlaylist() {
    if (!input) {
      alert("Please enter something in the box");
      return;
    }
    const newItemId = itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1;
    const item = {
      id: newItemId,
      path: `/playlist${newItemId}`,
      title: input,
      song: [],
    };

    setItemList((itemList) => [...itemList, item]);
    setInput("");
  }

  const handleCreatePlaylist = () => {
    <input
      type="text"
      className="app-add-detail-input"
      placeholder="add detail"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />;
    addPlaylist();
  };

  const handleConfirm = () => {
    handleCreatePlaylist();
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="homeNavbar">
        <NavLogo />
        <ul className="homeNavbar-ul">
          <li className="homeNavbar-li-homeLink">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="homeNavbar-li-library">
            <NavLink to="/home/libraryy">Library</NavLink>
          </li>
        </ul>
        {currentUser && (
          <>
            <button
              className="homeNavbar-createPlaylistBtn"
              onClick={() => setShowConfirm(true)}
            >
              Create Playlist
            </button>
            <hr />
            <ul className="homeNavbar-ul-playlists">
              {itemList.map((item) => {
                return (
                  <li className="homeNavbar-li-playlist" key={item.id}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {showConfirm && (
          <div className="confirm-dialog">
            <p>Enter playlist name</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleConfirm}>OK</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNavBar;
