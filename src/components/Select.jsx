import { ReactComponent as Arrow } from "../assets/flecha.svg";
import "../styles/Select.scss";

export const Select = () => {
     return (
          <div className="select-container">
               <div className="upper-input">
                    <Arrow />
               </div>
               <div className="options-container">
                    <div>opción1</div>
                    <div>opción2</div>
                    <div>opción3</div>
                    <div>opción4</div>
                    <div>opción5</div>
               </div>
          </div>
     );
};
