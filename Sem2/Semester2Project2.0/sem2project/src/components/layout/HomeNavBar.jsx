import "./HomeNavBar.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/Users/lampham_1310/Programming/VSCode/XCareer/PhamNgocLam_MindXCareerPlus/Sem2/Semester2Project2.0/sem2project/src/assets/cate2.png";
import "./HomeNavBar.css"

const HomeNavBar = () => {
  const [input, setInput] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  //   taken from to do list app
  const [itemList, setItemList] = useState([
    {
      id: 1,
      path: "/liked",
      title: "Liked songs",
      songs: [],
    },
    {
      id: 2,
      path: "/playlist2",
      title: "Personal Playlist",
      song: [],
    },
  ]);
  function addPlaylist() {
    if (!input) {
      alert("Please enter something in the box");
      return;
    }
    const newItemId =
      itemList.length > 0 ? itemList[itemList.length - 1].id + 1 : 1;
    const item = {
      id: newItemId,
      path: `/playlist${newItemId}`,
      title: input,
      song: [],
    };

    setItemList((itemList) => [...itemList, item]);
    setInput("");
    console.log(itemList);
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

  // handling confirmation and cancellation
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
        <div className="navbar-logo">
          <NavLink to="/">
            <img
              className="navbar-logo-img"
              src={logo}
              alt="nah man img aint available rn"
            />
          </NavLink>
        </div>

        <ul className="homeNavbar-ul">
          <li className="homeNavbar-li-homeLink">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="homeNavbar-li-library">
            <NavLink to="/library">Library</NavLink>
          </li>
        </ul>

        <button
          className="homeNavbar-createPlaylistBtn"
          onClick={() => setShowConfirm(true)}
        >
          Create Playlist
        </button>

        {/* only displayed if clicked on Create playlist */}
        {showConfirm && (
          <div className="confirm-dialog">
            <p>Enter playlist name:</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleConfirm}>OK</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}

        <ul className="homeNavbar-ul-playlists">
          {itemList.map((item) => {
            return (
              <li className="homeNavbar-li-playlist" key={item.id}>
                <NavLink to={item.path}>
                  <img src={item.img} alt="" />
                  <div>{item.title}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeNavBar;
