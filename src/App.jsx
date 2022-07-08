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
import { useContext, useEffect } from "react";
import { getToken } from "./helper";
import { AuthContext } from "./context/AuthContext";

function App() {
     const { isLogged } = useContext(AuthContext);

     const data = {
          params: {
               token: localStorage.getItem("token"),
               dev: "Nombre Host - APP otro",
               model: "trans.transportista",
               accion: "read",
               dominio: [["ejecutor", "=", 42]],
          },
     };

     useEffect(() => {
          setTimeout(()=> {
               fetch(`https://validacion.hgtsa.com.ar/app/data`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
          }).then((res) => {
               return res.json();
          }).then((res)=> {
               console.log(res)
          });
          }, 1000)
     }, []);

     return (
          <div className="main-container">
               {!isLogged ? (
                    <Routes>
                         <Route path="/" element={<Login />} />
                         <Route path="/recuperar" element={<Password />} />
                    </Routes>
               ) : (
                    <>
                         <Navbar />
                         <SideBar />
                         <Routes>
                              <Route path="/" element={<Welcome />} />
                              <Route path="/datos-generales" element={<GeneralData />} />
                              <Route path="/datos-fiscales" element={<FiscalData />} />
                              <Route path="/localidades" element={<Locations />} />
                              <Route path="/localidades/ingresar" element={<AddLocations />} />
                              <Route path="/lappa-plus" element={<LappaPlus />} />
                              <Route path="/facturacion" element={<Billing />} />
                              <Route path="/seguridad" element={<Security />} />
                         </Routes>
                    </>
               )}
          </div>
     );
}

export default App;
