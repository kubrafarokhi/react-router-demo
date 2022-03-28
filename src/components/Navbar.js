import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {

  const navlinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive ? 'bold': 'normal',
      textDecoration: isActive ? 'none':'underline'
    }
  }
  return (
    <nav className="primary-link">
      <NavLink style={navlinkStyles} to={"/"}>Home</NavLink>
      <NavLink style={navlinkStyles} to={"/about"}>About</NavLink>
      <NavLink style={navlinkStyles} to={"/products"}>Products</NavLink>
      <NavLink style={navlinkStyles} to={'/profile'}>Profile</NavLink>
    </nav>
    // <nav>
    //     <NavLink to={'/'}>Home</NavLink>
    //     <NavLink to={'/about'}>About</NavLink>
    // </nav>
  );
};

export default Navbar;
