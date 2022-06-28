import { NavLink } from "react-router-dom";

export const SideBarItem = ({ name, url }) => {
     let activeLink = {
          underline: "none",
          background: "#eabe3f",
     };
     return (
          <NavLink to={url} className="navbar-item" style={({ isActive }) => (isActive ? activeLink : undefined)}>
               {name}
          </NavLink>
     );
};
