import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/home";
import PropertyDetailsPage from "./pages/home/PropertyDetailsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/property/:propertyId",
        element: <PropertyDetailsPage />
    },
]);

export default router;
