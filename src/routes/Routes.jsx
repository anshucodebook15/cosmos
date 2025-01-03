import App from "../App";

import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "../layout/Layout";

import Booking from "../pages/Booking/Booking";
import Details from "../pages/Details/Details";
import Checkout from "../pages/Checkout/Checkout";
import Test from "../pages/Test/Test";
import Contact from "../components/Contact/Contact";
import Termsandcondition from "../components/Termsandcondition/Termsandcondition";
import PaymentFailure from "../pages/PaymentFailure/PaymentFailure";
import NotFound from "../pages/NotFound/NotFound";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import GoldCheckout from "../pages/Checkout/Gold/GoldTicket";
import Offers from "../pages/Booking/Offers";
import OfferCheckout from "../pages/Checkout/OfferCheckout";
// import Commingsoon from "../pages/Commingsoon/Commingsoon";

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
          <Route index path="/" element={<App />} />
          <Route element={<Layout />}>
            {/* <Route path="detail" element={<Details />} /> */}
            <Route path="booking" element={<Booking />} />
            <Route path="offers" element={<Offers />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="offer-checkout" element={<OfferCheckout />} />

            {/* <Route path="gold-ticket" element={<GoldCheckout />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="terms-and-condition" element={<Termsandcondition />} />
            <Route path="success" element={<PaymentSuccess />} />
            <Route path="failure" element={<PaymentFailure />} />
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="*" element={<NotFound />} />
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
