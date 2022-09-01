import Formulario from '/CSSBase/src/form/formClass.js'
import {formulario,enviar,btnSolicitud,btnDelete,btnBar} from '/CSSBase/src/form/formElements.js'
import {mostrar_Solicitudes,crear_Solicitud,evitarRefrescar,deleteTableContent} from '/CSSBase/src/form/formFuncs.js'

formulario.addEventListener("submit",evitarRefrescar )
enviar.addEventListener("click",crear_Solicitud )
btnSolicitud.addEventListener("click", mostrar_Solicitudes)
btnDelete.addEventListener("click",deleteTableContent)

export * from '/CSSBase/src/form/form.js';