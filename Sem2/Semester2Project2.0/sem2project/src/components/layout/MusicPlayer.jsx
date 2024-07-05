import { useRef, useState, useEffect } from "react";
import Songs from "../../assets/data/SONGS_DATA";
import "./MusicPlayer.css";
import prev from "../../assets/previous.png";
import next from "../../assets/next.png";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";

const MusicPlayer = ({ selectedSong }) => {
  useEffect(() => {
    if (selectedSong) {
      const songIndex = Songs.findIndex((song) => song.id === selectedSong.id);
      if (songIndex !== -1) {
        setCurrentSongIndex(songIndex);
        playPause(); // Play the selected song immediately
      }
    }
  }, [selectedSong]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const playPause = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % Songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + Songs.length) % Songs.length
    );
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const updateCurrentTime = () => setCurrentTime(audioElement.currentTime);
    const setAudioDuration = () => setDuration(audioElement.duration);

    audioElement.addEventListener("timeupdate", updateCurrentTime);
    audioElement.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audioElement.removeEventListener("timeupdate", updateCurrentTime);
      audioElement.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentSongIndex]);

  const handleSeek = (event) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };

  return (
    <div className="musicPlayer">
      <div className="musicPlayer-song">
        <img
          className="musicPlayer-songCover"
          src={Songs[currentSongIndex].cover}
          alt=""
        />
        <div className="musicPlayer-songTitle">
          {Songs[currentSongIndex].title}
        </div>
        <div className="musicPlayer-songArtists">
          {Songs[currentSongIndex].artist.map((artist, index) => {
            return <span key={index}> {artist} </span>;
          })}
        </div>
      </div>

      <div className="musicPlayer-player">
        <div className="musicPlayer-player-btn">
          <button onClick={prevSong}>
            <img src={prev} alt="" />
          </button>
          <button onClick={playPause}>
            <img src={isPlaying ? pause : play} alt="" />
          </button>
          <button onClick={nextSong}>
            <img src={next} alt="" />
          </button>
        </div>
        <div className="musicPlayer-progress">
          <div>{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}`}</div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <div>{`${Math.floor(duration / 60)}:${Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}`}</div>
        </div>
      </div>

      <audio
        src={process.env.PUBLIC_URL + Songs[currentSongIndex].path}
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
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
