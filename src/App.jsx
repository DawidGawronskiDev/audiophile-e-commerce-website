import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import MainPage from "./pages/Main";
import HeadphonesPage from "./pages/Headphones";
import SpeakersPage from "./pages/Speakers";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
