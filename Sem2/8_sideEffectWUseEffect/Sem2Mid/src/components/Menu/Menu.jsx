// this is the program to show the selected Anime on the banner when clicked.
import './Menu.css'

export default function Menu({ item, onSelected}) {
    return (
        <div onClick={()=> onSelected(item)}>
            <li className="Menu">
                <div className="menu-item-image">
                    <img src={item.image} alt="" />
                    <div className="gradient"></div>
                </div>
                <p>Episode: {item.episode}</p>
                <h5>{item.movieName}</h5>
            </li>
        </div>
    )
}