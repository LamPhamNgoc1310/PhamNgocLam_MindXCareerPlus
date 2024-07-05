// Library.jsx
import React from 'react';
import "./Library.css";
import Songs from "../../../assets/data/SONGS_DATA";

const Library = ({ onSelectSong }) => {
  return (
    <div className="library">
      <div className="library-header">Library</div>
      <div className="library-body">
        <table>
          <tr>
            <th>Song</th>
            <th>Artists</th>
          </tr>
          {Songs.map((song) => {
            return (
              <tr key={song.id} onClick={() => onSelectSong(song)}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Library;
