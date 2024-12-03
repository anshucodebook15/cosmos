import App from "../App";

import { BrowserRouter, Routes, Route } from "react-router";

import Layout from '../layout/Layout';

import Booking from "../pages/Booking/Booking";
import Details from "../pages/Details/Details";




export const NavigateTo = {
  Home: "/",
  Booking: "/booking",
  Detail: "/detail",
};

export const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<App />} />
            <Route path="detail" element={<Details />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

// export const AppRoutes = createBrowserRouter(SiteMap);
/**
 * 
 * export const SiteMap = [
  {
    name: "Home",
    path: "",
    element: "",
    children: [
      {
        name: "Jash-E-Rekhta",
        path: "",
        element: <App />,
        children: [],
      },

      {
        name: "Event",
        path: "event",
        element: <Details />,
        children: [
          {
            name: "Booking",
            path: "booking",
            element: <Booking />,
            children: [],
          },
        ],
      },
    ],
  },
];
 */
