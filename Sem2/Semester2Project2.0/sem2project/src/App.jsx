import "./App.css";
import { Routes, Route } from "react-router";
import { publicRouter, privateRouter } from "./router/router";
import Layout from "./components/layout/Layout";
import Library from "./components/playlists/library/Library";
import MusicPlayer from "./components/layout/MusicPlayer";
import { useState } from "react";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <>
      <Routes>
        {publicRouter.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}
        <Route path="/" element={<Layout />}>
          {privateRouter.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Route>
        <Route path="/home/libraryy" element={
          <>
            <Library onSelectSong={handleSelectSong} />
            <MusicPlayer selectedSong={selectedSong} />
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;
