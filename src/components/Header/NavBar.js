import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};
const linkStyles1 = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "orange",
  textDecoration: "none",
  color: "white",
};
const linkStyles2 = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
  return (
  <div className="navbar">
    <NavLink
        to="/"
        exact
        style={linkStyles2}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/EmployeeLogin"
        exact
        style={linkStyles1}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Employee Login
      </NavLink>
      
      
      <NavLink
        to="/employeePage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        All Employees
      </NavLink>
      <NavLink
        to="/employeeEdit"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        EmployeeEdit
      </NavLink>
      
  </div>
  )
}

export default NavBar;
