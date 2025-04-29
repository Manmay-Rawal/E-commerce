import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Coustomer/component/Navigation/Navigation.jsx";
import HomePage from "../Coustomer/pages/HomePages/HomePage.jsx";
import Footer from "../Coustomer/component/Footer/Footer.jsx";
import Products from "../Coustomer/component/Products/Products.jsx";
import ProductsDetails from "../Coustomer/component/ProductsDetials/ProductsDetails.jsx";
import Cart from "../Coustomer/component/Cart/Cart.jsx";
import Checkout from "../Coustomer/component/Checkout/Checkout.jsx";
import Order from "../Coustomer/component/Order/Order.jsx";
import OrderDetails from "../Coustomer/component/Order/OrderDetails.jsx";

const UseRoutes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThre" element={<Products />}></Route>
        <Route path="/product/:productId" element={<ProductsDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UseRoutes;




              {/* <Order/> */}
              {/* <OrderDetails/> */}