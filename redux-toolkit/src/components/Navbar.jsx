import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <span className="cartCount">Cart items: {cart.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
