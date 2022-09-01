import { ponerColumna } from "./adjustments/funcs.js";
import * as form from "./form/form.js";
//Column re-positioning when window resizes
window.addEventListener("resize",ponerColumna)
ponerColumna();
form;