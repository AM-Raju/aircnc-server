import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className="cursor-pointer hidden md:block" src={logo} alt="" width="100" height="100" />
    </Link>
  );
};

export default Logo;
