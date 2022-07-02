import { useEffect, useState } from "react";
import { getToken } from "../helper";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
     const [isOpen, setIsOpen] = useState("show-nav");
     const handleClick = () => {
          if (isOpen === "") {
               setIsOpen("show-nav");
          } else {
               setIsOpen("");
          }
     };

     const data = {
          params: {
               user: "prueba",
               pass: "prueba",
          },
     };

     const handlers = {
          handleClick,
          isOpen,
     };


     useEffect(() => {
          console.log(getToken(data))
     }, []);
     return <AuthContext.Provider value={handlers}>{children}</AuthContext.Provider>;
};
