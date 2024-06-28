import About from "../components/About/About";
import Home from "../components/Home/Home";
import Landing from "../components/Landing/Landing";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const publicRouter = [
    {
        path: "/", component: <Landing/>
    },
    {
        path: "/signup", component: <Signup/>
    },
    {
        path: "/login", component: <Login/>
    },
    {
        path: "/about", component: <About/>
    }
];

const privateRouter = [
    {
        path: "/menu", component: <Home/>
    }
];

export {publicRouter, privateRouter}