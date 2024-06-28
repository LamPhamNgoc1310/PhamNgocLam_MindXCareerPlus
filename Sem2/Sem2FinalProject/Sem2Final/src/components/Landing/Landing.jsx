import React from 'react'
import './Landing.css'
import Navbar from '../Layout/Navbar'

export default function Landing() {
    return (
        <div className='landingBody'>
            <div className="landingContainer">
                <Navbar/>

                <div className="banner">
                    <h2>Listen to the Meow-sic you choose</h2>

                    <div className="landing-button">
                        <a className="join-now" href="./signup.html">Join now</a>
                    </div>
                </div>
            </div>

            <div className="container2">
                <h2>REFERENCES</h2>
                <div className="references">
                    <img src="./assets/figma-logo.png" alt="" />
                    <img src="./assets/Spotify_Logo_RGB_Green.png" alt="" />
                    <img src="./assets/SoundCloud-Logo.png" alt="" />
                </div>
            </div>

            <footer className="credit">
                <p>© a template designed by Pham Ngoc Lam</p>
            </footer>
        </div>
    )
}
