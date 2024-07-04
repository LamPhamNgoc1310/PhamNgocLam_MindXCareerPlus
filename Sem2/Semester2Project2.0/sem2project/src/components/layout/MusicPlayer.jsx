import { useRef, useState } from "react";
import Songs from "../../assets/data/SONGS_DATA";
// import React, { useState, useRef } from "react";
import "./MusicPlayer.css";

// will have to use props to take in the song title, artist, duration
const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(50); // Initial volume at 50%
  const audioRef = useRef(null);
  const playPause = () => {
    const audioElement = audioRef.current;
    console.log(audioElement);
    console.log("Attempting to play");
    if (!isPlaying && audioElement.readyState >= 1) {
      audioElement.play().catch(error => console.error("Failed to play audio:", error));
      setIsPlaying(true);
      console.log("is playing");
    } else if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
      console.log("is not playing");
    }
    console.log(isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % Songs.length);
    console.log(Songs[currentSongIndex]);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + Songs.length) % Songs.length
    );
  };
  // console.log(Songs);
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-song"></div>
      <button onClick={playPause}>Play/Pause</button>
      <button onClick={nextSong}>Next Song</button>
      <button onClick={prevSong}>Previous Song</button>
      <div className="musicPlayer-player"></div>
      <audio src={Songs[currentSongIndex].path} ref={audioRef} preload="metadata" onClick={console.log(Songs[currentSongIndex].path)}/>
      <div className="musicPlayer-volume">
        <input
          type="range"
          min="0"
          max="100"
          value={volumeLevel}
          onChange={(e) => {
            const newVolumeLevel = e.target.value;
            setVolumeLevel(newVolumeLevel);
            audioRef.current.volume = newVolumeLevel/100;
            console.log(audioRef.current.volume);
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
