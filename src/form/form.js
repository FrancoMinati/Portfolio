
import {formulario,enviar,btnSolicitud,btnDelete,btnBar} from './formElements.js'
import {mostrar_Solicitudes,crear_Solicitud,evitarRefrescar,deleteTableContent} from './formFuncs.js'

formulario.addEventListener("submit",evitarRefrescar )
enviar.addEventListener("click",crear_Solicitud )
btnSolicitud.addEventListener("click", mostrar_Solicitudes)
btnDelete.addEventListener("click",deleteTableContent)

export * from './form.js';