import React from 'react'

export default function Home() {
    return (
        <div>

            <Navbar/>

            <audio src="" id="audio"></audio>


            <div className="homeContainer">

                <div className="player">
                    <h1 className="song-name">Mat tich</h1>
                    <p className="song-artist">Ngot</p>
                    <div className="song-img">

                    </div>

                    <div className="song-slider">
                        <input type="range" name="" className="seek-bar" value="0" />
                        <span className="current-time">00:00</span>
                        <span className="song-time">00:00</span>
                    </div>

                    <div className="controls">
                        <button className="prev"><img src="./assets/songs/prev.png" alt="" /></button>
                        <button className="play-button" id="play-button-clickable">

                        </button>
                        <button className="next"><img src="./assets/songs/next.png" alt="" /></button>

                    </div>
                </div>
                <br />
                <footer className="bottom">
                    <img src="./cats/cat1.gif" alt="" />
                    <img src="./cats/cat2.gif" alt="" />
                    <img src="./cats/cat3.gif" alt="" />
                    <img src="./cats/cat4.gif" alt="" />
                    <img src="./cats/cat5.gif" alt="" />
                    <img src="./cats/cat6.gif" alt="" />
                    <img src="./cats/cat7.gif" alt="" />
                    <img src="./cats/cat8.gif" alt="" />
                </footer>
            </div>
        </div>
    )
}
