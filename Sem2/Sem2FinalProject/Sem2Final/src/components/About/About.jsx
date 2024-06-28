import Navbar from '../Layout/Navbar'
import './About.css'

function About() {

    return (
        <div className='aboutBody'>
            <Navbar/>
            <div className="aboutContainer">
                <h2 className="title">About Catify</h2>
                <p className="author">Author: Pham ngoc Lam</p>
                <p className="pageNum">Number of pages: 5</p>
                <p className="listTitle">Javascript uses:</p>
                <ul className="javascriptUses">
                    <li>Log in</li>
                    <li>Sign in</li>
                    <li>Play Music</li>
                    <li>Change Songs</li>
                    <li>Storing songs data in list</li>
                </ul>
            </div>
        </div>
    )
}

export default About