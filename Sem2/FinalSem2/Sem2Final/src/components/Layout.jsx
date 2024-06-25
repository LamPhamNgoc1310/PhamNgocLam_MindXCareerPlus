import { Link, NavLink, Outlet } from "react-router-dom"


export default function Layout() {

    return (
        <div>
            <NavLink to="/">All</NavLink>
            <NavLink to="/active">Active</NavLink>
            <NavLink to="/completed">Completed</NavLink>
            <Outlet/>
        </div>
    )
}