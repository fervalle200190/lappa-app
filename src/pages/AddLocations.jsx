import { Select } from "../components/Select";
import '../styles/AddLocations.scss'

export const AddLocations = () => {
     return (
          <div className="add-location-container">
               <h1 className="location-title">Localidades</h1>
               <form className="form-container-add-locations">
                    <label>
                         Localidad
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Domicilio
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Celular
                         <div className="extra-container">
                              <input type="text" name="location" id="location" />
                              <span>Sin 0 ni 15</span>
                         </div>
                    </label>
                    <label>
                         Teléfono fijo
                         <input type="text" name="location" id="location" />
                    </label>
                    <label>
                         Días de arribo a la localidad
                         <Select />
                    </label>
                    <label>
                         Entrega a domicilio
                         <Select />
                    </label>
                    <label>
                         Retira a domicilio
                         <Select />
                    </label>
                    <label>
                         Cuenta con autoelevador
                         <input type="text" name="location" id="location" />
                    </label>
               </form>
          </div>
     );
};