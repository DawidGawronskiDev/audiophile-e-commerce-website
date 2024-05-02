import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import MainPage from "./pages/Main";
import HeadphonesPage from "./pages/Headphones";
import SpeakersPage from "./pages/Speakers";
import EarphonesPage from "./pages/Earphones";
import ProductPage from "./pages/Product";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
      {
        path: "headphones",
        element: <HeadphonesPage />,
      },
      {
        path: "speakers",
        element: <SpeakersPage />,
      },
      {
        path: "earphones",
        element: <EarphonesPage />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
