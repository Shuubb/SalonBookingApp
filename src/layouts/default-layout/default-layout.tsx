import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

export default function DefaultLayout() {
   return (
      <>
         <Navbar />
         <main>
            <Outlet />
         </main>
      </>
   );
}
