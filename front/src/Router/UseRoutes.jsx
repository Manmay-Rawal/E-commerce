import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Coustomer/component/Navigation/Navigation.jsx";
// import HomePage from "../Coustomer/pages/HomePages/HomePage.jsx";
import Footer from "../Coustomer/component/Footer/Footer.jsx";
// import Products from "../Coustomer/component/Products/Products.jsx";
// import ProductsDetails from "../Coustomer/component/ProductsDetials/ProductsDetails.jsx";
// import Cart from "../Coustomer/component/Cart/Cart.jsx";
import Checkout from "../Coustomer/component/Checkout/Checkout.jsx";

const UseRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              {/* <HomePage /> */}
              {/* <Products /> */}
              {/* <ProductsDetails /> */}
              {/* <Cart/> */}
              <Checkout/>
              <Footer />
            </>
          }
        ></Route>
        {/* <Route
          path="/Products"
          element={
            <>
              <NavBar />
              <Products />
              <Footer />
            </>
          }
        ></Route>*/}
      </Routes> 
    </div>
  );
};

export default UseRoutes;
