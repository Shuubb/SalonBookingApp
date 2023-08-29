import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import DefaultLayout from "./layouts/default-layout/default-layout";
import Booking from "./pages/booking/booking";
import CheckBooking from "./pages/check-booking/check-booking";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <DefaultLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/booking",
            element: <Booking />,
         },
         {
            path: "/checkBooking",
            element: <CheckBooking />,
         },
      ],
   },
]);
