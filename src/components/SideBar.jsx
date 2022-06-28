import { LappaLogo } from "./LappaLogo";
import { SideBarItem } from "./SideBarItem";
import "../styles/SideBar.scss";
import { Link } from "react-router-dom";

const sideBarOptions = [
     {
          name: "datos generales",
          url: "/datos-generales",
     },
     {
          name: "datos fiscales",
          url: "/datos-fiscales",
     },
     {
          name: "localidades",
          url: "/localidades",
     },
     {
          name: "lappa plus",
          url: "/lappa-plus",
     },
     {
          name: "facturación",
          url: "/facturacion",
     },
     {
          name: "seguridad",
          url: "/seguridad",
     },
     {
          name: "salir",
          url: "/salir",
     },
];

export const SideBar = () => {
     return (
          <>
               <nav className="navbar-container">
                    <Link to={`/`}>
                         <LappaLogo />
                    </Link>
                    <div className="items-container">
                         {sideBarOptions.map((sideBarOption) => (
                              <SideBarItem key={sideBarOption.name} {...sideBarOption} />
                         ))}
                    </div>
               </nav>
          </>
     );
};
