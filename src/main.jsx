import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage, {
  loader as categoryLoader,
} from "./components/Pages/Category/Category";
import ProductPage, {
  loader as productLoader,
} from "./components/Pages/ProductPage/ProductPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/category/:category",
        element: <CategoryPage />,
        loader: categoryLoader,
      },
      {
        path: "/category/:category/product/:slug",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
