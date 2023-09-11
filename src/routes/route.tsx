import { createBrowserRouter } from "react-router-dom";
import Racer from "../components/Racer";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    
]);

export default router;