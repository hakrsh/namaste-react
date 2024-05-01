import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// const [btnName, setBtnName] = useState("Login"); Never call useState outside the functional component
// it's used to create local state variables inside the functional component

const Header = () => {
  // whenever the state changes react re-render the whole component
  // but react is having the diff algorithm
  // it only has the render what exactly changes
  // never create state variable inside conditional block/for loop/inside function -> can create inconsistencies
  // Keep them at the top
  const [btnName, setBtnName] = useState("Login"); // that's why we can change this const variable, re-render => calling this func again
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
