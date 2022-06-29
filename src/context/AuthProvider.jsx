import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
     const askAuth = async () => {
         axios(`https://odoo.rgbconsulting.com/es/filtros-avanzados-odoo-2/login`, {
               headers: { "Content-Type": "application/json" },
               method: "POST",
               params: {
                    user: "prueba",
                    pass: "prueba",
                    dev: "Lappa",
               },
          }).then((res)=> {
            console.log(res)
          }).catch((err)=> {
            console.log(err)
          })
     };
     useEffect(() => {
        askAuth()
     }, []);

     return <AuthContext.Provider value={"hola"}>{children}</AuthContext.Provider>;
};
