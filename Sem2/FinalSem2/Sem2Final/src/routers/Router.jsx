import Active from "../components/Active";
import All from "../components/All";
import Completed from "../components/Completed";

const router = [
    {
        path: "/", component: <All />
    },
    {
        path: "/active", component: <Active />
    },
    {
        path: "/completed", component: <Completed />
    }
];

export default router