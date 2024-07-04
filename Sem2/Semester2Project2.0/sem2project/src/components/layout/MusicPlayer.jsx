import { useRef, useState } from "react";
import Songs from "../../assets/data/SONGS_DATA";
// import đợi-ft-wean.mp3 from "../../../public/songs-audio"

import "./MusicPlayer.css";

// will have to use props to take in the song title, artist, duration
const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(50); // Initial volume at 50%
  const audioRef = useRef(null);
  const playPause = () => {
    const audioElement = audioRef.current;
    console.log(Songs[currentSongIndex].path);
    console.log(process.env.PUBLIC_URL + Songs[currentSongIndex].path);
    setIsPlaying(!isPlaying);
    if (isPlaying == true) {
      audioElement
        .play()
        // .catch((error) => console.error("Failed to play audio:", error));
      console.log("is playing");
    } else {
      audioElement.pause();
    }
    console.log(isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % Songs.length);
    // console.log(Songs[currentSongIndex]);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + Songs.length) % Songs.length
    );
  };
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-song">
        <img src={Songs[currentSongIndex].cover} alt="" />
        {Songs[currentSongIndex].title}
      </div>

      <div className="musicPlayer-player"></div>
      <button onClick={playPause}>Play/Pause</button>
      <button onClick={nextSong}>Next Song</button>
      <button onClick={prevSong}>Previous Song</button>
      <audio
        src={Songs[currentSongIndex].path}
        ref={audioRef}
        preload="metadata"
      />

      <div className="musicPlayer-volume">
        <input
          type="range"
          min="0"
          max="100"
          value={volumeLevel}
          onChange={(e) => {
            const newVolumeLevel = e.target.value;
            setVolumeLevel(newVolumeLevel);
            audioRef.current.volume = newVolumeLevel / 100;
            console.log(audioRef.current.volume);
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
