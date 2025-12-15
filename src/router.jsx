import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import PrivateRoute from "./privateRoues";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/products/:id?",
                element: <Products />,
            }, {
                path: "/categories",
                element: <Categories />,
            }, {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "/orders",
                        element: <Orders />,
                    },
                    {
                        path: "/cart",
                        element: <Cart />,
                    },
                ],
            },
        ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);

export default router;
