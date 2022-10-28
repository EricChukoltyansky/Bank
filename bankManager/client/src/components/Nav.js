import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <ul className="nav-bar">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Create
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
