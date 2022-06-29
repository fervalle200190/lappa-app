import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import '../styles/Login.scss'

export const Login = () => {
     return (
          <div className="inner-main">
               <div className="big-container">
                    <Logo />
                    <form className="login-form">
                         <label>
                              Correo Electrónico | Celular
                              <input type="text" />
                         </label>
                         <label>
                              Contraseña
                              <input type="text" />
                         </label>
                         <input type="submit" value="Ingresar" />
                         <Link to="/recuperar">Olvidé mi usuario</Link>
                    </form>
               </div>
          </div>
     );
};
