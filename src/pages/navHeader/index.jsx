import React, { useState } from "react";
import { Link, useLocation, pathname } from "react-router-dom";
import { Li, Navheader } from "./style";

function NavHeader({ logout }) {
  const { pathname } = useLocation();
  
  return (
    <>
      <Navheader>
        <p className="logo">E-Commerse</p>
        <ul>
          <Li back={pathname==="/"}>
            <Link to="/">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/medium-icons.png"
                alt=""
              />{" "}
              <span >Dashboard</span>
            </Link>
          </Li>
          <Li back={pathname==="/product"}>
            <Link to="/product">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
                alt=""
              />{" "}
              <span> Products</span>
            </Link>
          </Li>
          <Li back={pathname==="/history"}>
            <Link to="/history">
              <img
                src="https://img.icons8.com/ios-filled/64/000000/user-group-man-man.png"
                alt=""
              />{" "}
              <span> History</span>
            </Link>
          </Li>
          <Li back={pathname==='/cart'}>
            <Link to="/cart">
              <img
                src="https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-communication-gradak-communikatok-solidarity-gradak-royyan-wijaya-6.png"
                alt=""
              />
               <span>Cart</span>
            </Link>{" "}
          </Li>
        </ul>
      </Navheader>
    </>
  );
}

export default NavHeader;
