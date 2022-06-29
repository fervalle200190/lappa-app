import '../styles/Security.scss'
import {ReactComponent as BackIcon} from '../assets/nav-op.svg'


export const Security = () => {
     return (
          <div className='security-container'>
               <h1 className='security-title'>Seguridad</h1>
               <form className="form-container-security">
                    <label>
                         Correo electrónico actual
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Correo electrónico nuevo
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Repetir correo electrónico nuevo
                         <input type="text" name="location" id="location" />
                    </label>
                    <div className="btn-security">
                         <button>Guardar cambios</button>
                    </div>
               </form>
               <form className="form-container-security snd-form">
                    <label>
                         Clave actual
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Clave nueva
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Repetir clave nueva
                         <input type="text" name="location" id="location" />
                    </label>
                    <div className="btn-security">
                         <button>Guardar cambios</button>
                    </div>
               </form>
               <BackIcon className='back-icon' />
          </div>
     );
};
