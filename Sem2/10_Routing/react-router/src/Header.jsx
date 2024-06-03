import React from "react";
import { Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
<div>
    <ul>
        <li>
            <NavLink className={(pathActivity) => {
                console.log(pathActivity)
            }} to='/home'>Home</NavLink>
        </li>

        <li>
            <Link to='/login'>Login</Link>
        </li>

        <li>
            <Link to='profile'>Profile</Link>
        </li>
    </ul>
</div>
    )
}

export default Header