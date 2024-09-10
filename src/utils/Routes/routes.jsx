import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Accomodation from "../../pages/Accomodation/Accomodation";
import About from "../../pages/About/About";
import NotFound from "../../pages/notFound/NotFound";
import RootLayout from "../../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/accomodation/:id",
        element: <Accomodation />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
