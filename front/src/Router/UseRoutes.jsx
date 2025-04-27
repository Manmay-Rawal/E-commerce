import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Coustomer/component/Navigation/Navigation.jsx";
import HomePage from "../Coustomer/pages/HomePages/HomePage.jsx";
import Footer from "../Coustomer/component/Footer/Footer.jsx";
import Products from "../Coustomer/component/Products/Products.jsx";

const UseRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomePage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Products"
          element={
            <>
              <NavBar />
              <Products />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default UseRoutes;
