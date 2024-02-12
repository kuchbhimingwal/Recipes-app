import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FavContextProvider from "./context/favContextProvider";

function Layout(){
  
  return (
    <FavContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavContextProvider>
  )
}

export default Layout