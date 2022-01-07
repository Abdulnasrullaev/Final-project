import React, { useState } from "react";
import NavHeader from "../navHeader";
import { Mainpages } from "./style";
import DashBoard from "../dashboard";
import Product from "../product";
import { Route, Routes } from "react-router-dom";
import Message from "../cart";
import History from "../history";
import Logins from "./Logins";

function MainPage() {
  return (
    <>
      <Mainpages>
        <input type="text" placeholder="Search Product" />

        <NavHeader />
        <Routes>
          <Route path="/" exact element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Message />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Mainpages>
    </>
  );
}

export default MainPage;
