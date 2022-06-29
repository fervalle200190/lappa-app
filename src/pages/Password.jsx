import { ReactComponent as Logo } from "../assets/logo.svg";
import "../styles/Password.scss";

export const Password = () => {
     return (
          <div className="password-container">
               <Logo />
               <div className="inner-box">
                    <div className="lock-container">
                         <ion-icon name="lock-closed"></ion-icon>
                    </div>
                    <h1>¿No te acordas de la contraseña?</h1>
                    <p>Podes regenerar la contraseña con tu teléfono o correo eletrónico</p>
                    <div className="input-container">
                         <div className="mail-icon-container">
                              <ion-icon name="mail"></ion-icon>
                         </div>
                         <input type="text" name="mix" />
                    </div>
                    <button>Regenerar contraseña</button>
               </div>
          </div>
     );
};
