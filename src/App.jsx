import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Catalog from "./pages/Catalog";
import Tovar from "./pages/Tovar";
import About from "./pages/about/About";
import Dostavka from "./pages/Dostavka";
import Services from "./pages/Services";
import Blog from "./pages/blog/Blog";
import Oplata from "./pages/Oplata";
import Grants from "./pages/Grants";
import Comments from "./components/comments/Comments";
import News from "./pages/blog/News";
import BlogMain from "./pages/blog/BlogMain";
import Kobinet from "./pages/Kobinet";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import AboutMain from "./pages/about/AboutMain";
import Vacancy from "./pages/about/Vacancy";
import Sertificats from "./pages/about/Sertificats";

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
          element: <AboutMain/>,
          children:  [
            {
              path: "/about",
              element: <About/>
            },
            {
              path: "/about/vacancy",
              element: <Vacancy/>
            },
            {
              path: "/about/serticats",
              element: <Sertificats/>
            },
          ]
        },
        {
          path: "/dostavka",
          element: <Dostavka/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/kobinet",
          element: <Kobinet/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/blog",
          element: <Blog/>,
          children: [
            {
              path: "/blog",
              element: <BlogMain/>
            },
            {
              path: "/blog/news",
              element: <News/>
            },
          ]
        },
        {
          path: "/oplata",
          element: <Oplata/>
        },
        {
          path: "/grants",
          element: <Grants/>
        },
        {
          path: "/comments",
          element: <Comments/>
        },
        {
          path: "/faq",
          element: <Faq/>
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