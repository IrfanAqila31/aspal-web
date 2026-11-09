import type { RouteObject } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import Products from "../components/pages/Products";
import ProductsDetail from "../components/pages/ProductsDetail";
import Applications from "../components/pages/Applications";
import Contact from "../components/pages/Contact";

const routes: RouteObject[] = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetail />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;