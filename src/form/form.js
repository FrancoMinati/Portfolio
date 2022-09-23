
import {formulario,enviar,btnSolicitud,btnHide} from './formElements.js'
import {mostrar_Solicitudes,crear_Solicitud,evitarRefrescar,hideTableContent} from './formFuncs.js'

formulario.addEventListener("submit",evitarRefrescar )
enviar.addEventListener("click",crear_Solicitud )
btnSolicitud.addEventListener("click", mostrar_Solicitudes)
btnHide.addEventListener("click",hideTableContent)
localStorage.setItem("solicitudes",JSON.stringify([]))
export * from './form.js';