import Landing  from "../components/landing/Landing"
import Signin from "../components/signin/Signin"
import Login from '../components/login/Login'
import About from '../components/about/About'
import Home from '../components/home/Home'

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
    }
];

export {publicRouter, privateRouter}