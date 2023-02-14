import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Product from "../pages/Product";

const router = createBrowserRouter([
    {path:"/", element:<Main></Main>, children:[
        {path:"/", element: <Home></Home>},
        {path:"/home", element: <Home></Home>},
        {path:"/product", element: <Product></Product>}
    ]}
])
export default router