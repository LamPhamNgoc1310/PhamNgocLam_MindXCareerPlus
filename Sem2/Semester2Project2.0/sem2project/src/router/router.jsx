import Landing  from "../components/landing/Landing"
import Signin from "../components/signin/Signin"
import Login from '../components/login/Login'
import About from '../components/about/About'
import Home from '../components/home/Home'
import Liked from "../components/playlists/liked/Liked"
import Library from "../components/playlists/library/Library"


const publicRouter = [
    {
        path: "/", component: <Landing/>
    },
    {
        path: "/signin", component: <Signin/>
    },
    {
        path: "/login", component: <Login/>
    },
    {
        path: "/about", component: <About/>
    },

];

const privateRouter = [
    {
        path: "/home", component: <Home/>
    },
    {
        path: "/home/liked", component: <Liked/>
    },
    {
        path: "/home/library", component: <Library/>
    },
];

export {publicRouter, privateRouter}