import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Catalog from "./pages/Catalog";
import Tovar from "./pages/Tovar";
import About from "./pages/About";
import Dostavka from "./pages/Dostavka";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/catalog",
          element: <Catalog/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/dostavka",
          element: <Dostavka/>
        },
        {
          path: "/tovar/:id",
          element: <Tovar/>
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App