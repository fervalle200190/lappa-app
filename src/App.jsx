import "./App.scss";
import { Routes, Route } from "react-router";
import { SideBar } from "./components/SideBar";
import {
     Welcome,
     GeneralData,
     FiscalData,
     Locations,
     LappaPlus,
     Billing,
     Security,
     AddLocations,
     Login,
     Password,
} from "./pages";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";
import axios from "axios";

function App() {
     return (
          <div className="main-container">
               {/* <Navbar /> */}
               {/* <Password /> */}
               {/* <Login />  */}
               {/* <SideBar /> */}
               {/* <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/datos-generales" element={<GeneralData />} />
                    <Route path="/datos-fiscales" element={<FiscalData />} />
                    <Route path="/localidades" element={<Locations />} />
                    <Route path="/localidades/ingresar" element={<AddLocations />} />
                    <Route path="/lappa-plus" element={<LappaPlus />} />
                    <Route path="/facturacion" element={<Billing />} />
                    <Route path="/seguridad" element={<Security />} />
               </Routes> */}
          </div>
     );
}

export default App;
