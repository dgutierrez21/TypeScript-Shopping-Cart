import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Store } from "../pages/Store";
import { About } from "../pages/About";
import { ShoppingCartApp } from "../ShoppingCartApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShoppingCartApp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
