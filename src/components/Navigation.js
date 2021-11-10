import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="nav-box">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "nav-link" + (isActive ? " nav-link__active" : "")
        }
      >
        Authorization{" "}
      </NavLink>
      <NavLink
        to="/request"
        className={({ isActive }) =>
          "nav-link" + (isActive ? " nav-link__active" : "")
        }
      >
        Request
      </NavLink>
      <NavLink
        to="/input"
        className={({ isActive }) =>
          "nav-link" + (isActive ? " nav-link__active" : "")
        }
      >
        Input
      </NavLink>
    </div>
  );
};

export default Navigation;
