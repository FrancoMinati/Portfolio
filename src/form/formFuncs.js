//Guardado local
import Formulario from "./formClass.js"
import { nombre, apellido, email, numero, motivo, tableBody, btnHide, btnBar } from './formElements.js'

//Funcion para persistir los ids u otras cosas localmente
const guardadoLocal = (key, value) => {
    if (localStorage.getItem(key) == null) {

        localStorage.setItem(key, JSON.stringify(value));
    } else {
        let p = JSON.parse(localStorage.getItem(key))
        p.push(value)
        localStorage.setItem(key, JSON.stringify(p));


    }
}

//Mostrado de solicitudes
function mostrar_Solicitudes() {
    //Verificacion para no repetir filas, si existen filas, se borran
    checkTableContent();
    let solicitudes = JSON.parse(localStorage.getItem("solicitudes"))
    //Chequea que existan solicitudes previas
    if ((solicitudes != (null || solicitudes == []))) {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Aquí estan sus solicitudes',
        })
        document.querySelector("#tabla-solicitudes").style.visibility = "visible";
        //Aparicion del boton para ocultar las solicitudes
        ShowButtonInBar(btnHide, btnBar);
        //Creacion de filas
        for (let i = 0; i < solicitudes.length; i++) {
            let peticionRecuperada = solicitudes[i];
            const tr = document.createElement('tr')
            tr.classList.add("tr-solicitud")
            tr.innerHTML = `<td data-label="Nombre"> ${peticionRecuperada.nombre}</td> 
                      <td data-label="Apellido">${peticionRecuperada.apellido}</td>
                      <td data-label="Email">${peticionRecuperada.email}</td> 
                      <td data-label="Numero">${peticionRecuperada.numero}</td>
                      <td data-label="Motivo">${peticionRecuperada.motivo}</td>
                      <td><button class="btn-delete"><i class="bi bi-trash3"></i></button></td>`
            tableBody.appendChild(tr);
        }
        //Añadido de la funcionalidad de borrado
        deleteRows();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay solicitudes enviadas',
            footer: '<p>Prueba enviando alguna<p>'
        })
        document.querySelector("#tabla-solicitudes").style.visibility = "hidden"
    }
}
//Almaceno un array de eventos para los botones de eliminado
let tableRows = [];
function deleteRows() {
    tableRows = [];
    let btnDelete = document.querySelectorAll(".btn-delete")
    let rows = document.querySelectorAll(".tr-solicitud")
    let solicitudes = JSON.parse(localStorage.getItem("solicitudes"))
//Metodo de almacenamiento de los eventos
    for (let i = 0; i < solicitudes.length; i++) {
        tableRows.push(
            btnDelete[i].addEventListener("click", () => {
                //Se llama a f que se encarga de devolver la contraseña de cada solicitud, la cual se da al generar la solicitud, pero se puede ver desde el local storage
                f()
                    .then((res) => {
                        res.value == solicitudes[i].password && (
                            Swal.fire({
                                title: 'Estas seguro?',
                                text: "Tu solicitud se borrara para siempre!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Si, borralo!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire(
                                        'Borrado!',
                                        'Tu solicitud fue borrada',
                                        'success'
                                    )
                                    //Borrado de la solicitud tanto del storage, como de la tabla
                                    let borrar = JSON.parse(localStorage.getItem("solicitudes"))
                                    i == 0 ? (borrar.shift()) : (borrar.splice(i, i))
                                    rows[i].remove();
                                    localStorage.setItem("solicitudes", JSON.stringify(borrar))
                                    if (JSON.parse(localStorage.getItem("solicitudes")) == (null || JSON.parse(localStorage.getItem("solicitudes") == []))) {
                                        hideTableContent()
                                    }
                                }

                            })
                        )
                    })
            }))
    }

}
//Pedido de la contraseña para eliminar la solicitud
async function f() {

    const password = await Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 25,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })
    return new Promise((resolve, reject) => {
        resolve(password)

    })
}
//Para la persistencia de las solicitudes pense en simular base de datos con el localstorage, usando un id incremental
function crear_Solicitud() {
    let nuevaSolicitud = new Formulario();
    nuevaSolicitud.nombre = nombre.value;
    nuevaSolicitud.apellido = apellido.value;
    nuevaSolicitud.motivo = motivo.value;
    console.log(nuevaSolicitud.validarFormulario(numero.value, email.value));
    //Persisto el numero de id para poder guardar mas gente y a la gente la guardo con su numero de id
    if (JSON.parse(localStorage.getItem("solicitudes")) != null) {

        nuevaSolicitud.validarFormulario(numero.value, email.value) ? (
            //Alerta exito de SW2
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Solicitud enviada',
                footer: `<p>Contraseña:${nuevaSolicitud.generarContra()}</p>`

            }),
            guardadoLocal("solicitudes", nuevaSolicitud))
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
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Solicitud enviada',
                footer: `<p>Contraseña:${nuevaSolicitud.generarContra()}</p>`,
            }),
            guardadoLocal("solicitudes", [nuevaSolicitud])
        )
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
    return (b, container) => {
        InContainer ? (
            b.style.display = "block",
            container.classList.remove("justify-content-center"),
            container.classList.add("justify-content-between"),
            container.classList.add("w-100")) :
            b.style.display = "block";
    }
}

function HideButton(InContainer) {
    return (b, container) => {
        InContainer ? (
            b.style.display = "none",
            container.classList.add("justify-content-center"),
            container.classList.remove("justify-content-between"),
            container.classList.remove("w-100")) :
            b.style.display = "none";
    }
}
function hideTableContent() {
    checkTableContent();
    document.querySelector("#tabla-solicitudes").style.visibility = "hidden";
    HideButtonInBar(btnHide, btnBar);
    Swal.fire({
        icon: 'info',
        title: '¿Sabías que?',
        text: 'Siempre puedes volver a verlas',
    })
}
function checkTableContent() {

    var child = tableBody.lastElementChild;
    while (child) {
        tableBody.removeChild(child);
        child = tableBody.lastElementChild;
    }
}
const HideButtonInBar = HideButton(true);
const HideButtonAlone = HideButton(false);
const ShowButtonInBar = ShowButton(true);
const ShowButtonAlone = ShowButton(false);
export { mostrar_Solicitudes, crear_Solicitud, evitarRefrescar, hideTableContent }