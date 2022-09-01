//Guardado local
import Formulario from './formClass.js'
import { nombre, apellido, email, numero, motivo, solicitudes,tableBody, btnDelete, btnBar } from '/src/form/formElements.js'


const guardadoLocal = (key, value) => { localStorage.setItem(key, value); }
//Storage

function mostrar_Solicitudes() {
    //Verificacion para no repetir filas, si existen filas, se borran
    checkTableContent();

    if (localStorage.getItem("id") != null) {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Aquí estan sus solicitudes',
        })
        document.querySelector("#tabla-solicitudes").style.visibility = "visible";
        ShowButtonInBar(btnDelete,btnBar);
        for (let i = 1; i <= (Number(localStorage.getItem("id"))); i++) {
            let solicitudLs = JSON.parse(localStorage.getItem(i));
            const tr = document.createElement('tr')

            tr.innerHTML = `<td data-label="Nombre"> ${solicitudLs.nombre}</td> 
                      <td data-label="Apellido">${solicitudLs.apellido}</td>
                      <td data-label="Email">${solicitudLs.email}</td> 
                      <td data-label="Numero">${solicitudLs.numero}</td>
                      <td data-label="Motivo">${solicitudLs.motivo}</td>`

            tableBody.appendChild(tr);

        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay solicitudes enviadas',
            footer: '<p>Prueba enviando alguna<p>'
        })
    }
}

//Para la persistencia de las solicitudes pense en simular base de datos con el localstorage, usando un id incremental
function crear_Solicitud() {
    let nuevaSolicitud = new Formulario();
    nuevaSolicitud.nombre = nombre.value;
    nuevaSolicitud.apellido = apellido.value;
    nuevaSolicitud.motivo = motivo.value;
    console.log(nuevaSolicitud.validarFormulario(numero.value, email.value));
    //Persisto el numero de id para poder guardar mas gente y a la gente la guardo con su numero de id
    if (localStorage.getItem("id") != null) {

        nuevaSolicitud.validarFormulario(numero.value, email.value) ? (
            solicitudes.push(nuevaSolicitud),
            //Persisto el valor actual del ID
            guardadoLocal("id", (Number(localStorage.getItem("id")) + 1)),
            console.log("Solicitud enviada"),
            //Alerta exito de SW2
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Solicitud enviada',
            }),
            //Persisto la solicitud
            guardadoLocal((Number(localStorage.getItem("id"))), JSON.stringify(nuevaSolicitud)))
            : (
                //Alerta error de SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal',
                    text: 'No se envio la solicitud',
                    footer: '<p>Prueba llenar correctamente los campos.<p>'
                }),
                console.log("Solicitud invalida"))
    } else {
        nuevaSolicitud.validarFormulario(numero.value, email.value) ? (
            solicitudes.push(nuevaSolicitud),
            //Si no hay solicitudes creo la primera y seteo ID en 1
            guardadoLocal("id", 1),
            console.log("Solicitud enviada"),

            //Persisto la solicitud
            guardadoLocal(localStorage.getItem("id"), JSON.stringify(nuevaSolicitud)),
            //Alerta error SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Solicitud enviada',
            }))
            : (
                //Alerta error SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal',
                    text: 'No se envio la solicitud',
                    footer: '<p>Prueba llenar correctamente los campos.<p>'
                }),
                console.log("Solicitud invalida"))
    }
}
function evitarRefrescar(e) {
    e.preventDefault();

}
function ShowButton(InContainer) {
    return (b,container) => {
        InContainer ? (
            b.style.display = "block",
            container.classList.remove("justify-content-center"),
            container.classList.add("justify-content-between"),
            container.classList.add("w-100")) :
            b.style.display = "block";
    }
}

function HideButton(InContainer) {
    return (b,container) => {
        InContainer ? (
            b.style.display = "none",
            container.classList.add("justify-content-center"),
            container.classList.remove("justify-content-between"),
            container.classList.remove("w-100")) :
            b.style.display = "none";
    }
}
function deleteTableContent(){
    checkTableContent();
    document.querySelector("#tabla-solicitudes").style.visibility = "hidden";
    HideButtonInBar(btnDelete,btnBar);
    Swal.fire({
        icon: 'info',
        title: '¿Sabías que?',
        text: 'Siempre puedes volver a verlas',
    })
}
function checkTableContent(){
    
    var child = tableBody.lastElementChild;
    while (child) {
        tableBody.removeChild(child);
        child = tableBody.lastElementChild;
    }
}
const HideButtonInBar=HideButton(true);
const HideButtonAlone=HideButton(false);
const ShowButtonInBar=ShowButton(true);
const ShowButtonAlone=ShowButton(false);
export { mostrar_Solicitudes, crear_Solicitud, evitarRefrescar,deleteTableContent }