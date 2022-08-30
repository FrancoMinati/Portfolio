let formulario = document.querySelector("#form-contacto");
let nombre = document.querySelector("#form-nombre");
let apellido = document.querySelector("#form-apellido");
let email = document.querySelector("#form-email");
let numero = document.querySelector("#form-numero");
let motivo = document.querySelector("#form-motivo");
let enviar = document.querySelector("#form-submit");
let btnSolicitud = document.querySelector("#btn-solicitud");
let tbody = document.querySelector('#body');
class Formulario {
    constructor(nombre, apellido, email, numero, motivo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.numero = numero;
        this.motivo = motivo;
    }
    setEmail(emailAtribute) {
        //Existe lo que se llama expresion regular para el email o EmailRegex
        let emailRegex = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/
        if (emailRegex.test(emailAtribute)) {
            this.email = emailAtribute;
            return true;
        } else {
            email.value = "Email incorrecto"
            return false;
        }
    }
    setNumero(numeroAtribute) {
        /*         console.log(numeroAtribute.toString().length);
         */
        let numRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (numRegex.test(numeroAtribute)) {
            this.numero = numeroAtribute;
            return true;
        } else {
            numero.value = "Numero invalido";
            return false;
        }
    }
    validarFormulario(numeroAtribute, emailAtribute) {
        if (this.setEmail(emailAtribute) && this.setNumero(numeroAtribute)) {
            return true;
        } else {
            return false;
        }
    }
}

let solicitudes = [];


//Evitar refrescar la pagina tras el envio del formulario.
formulario.addEventListener("submit", function evitarRefrescar(e) {
    e.preventDefault();

})
// Guardado local
const guardadoLocal = (key, value) => { localStorage.setItem(key, value); }
let id = 0;
id = localStorage.getItem("id");
enviar.addEventListener("click", function crear_Solicitud() {
    let nuevaSolicitud = new Formulario();
    nuevaSolicitud.nombre = nombre.value;
    nuevaSolicitud.apellido = apellido.value;
    nuevaSolicitud.motivo = motivo.value;
    console.log(nuevaSolicitud.validarFormulario(numero.value, email.value));
    nuevaSolicitud.validarFormulario(numero.value, email.value) ? (
        solicitudes.push(nuevaSolicitud),
        id++,
        guardadoLocal("id", id),
        console.log("Solicitud enviada"),
        guardadoLocal(id, JSON.stringify(nuevaSolicitud)))
        :
        console.log("Solicitud invalida")

})
//Recuperacion de solicitudes

btnSolicitud.addEventListener("click", function mostrar_Solicitudes(e) {
    //Con esto de aca verifico que si presionan el boton de nuevo
    //El contenido se cargue sin repetirse.
    var child = tbody.lastElementChild;
    while (child) {
        tbody.removeChild(child);
        child = tbody.lastElementChild;
    }
    document.querySelector("#tabla-solicitudes").style.visibility="visible"
    for (let i = 1; i <= id; i++) {
        let solicitudLs = JSON.parse(localStorage.getItem(i));
        const tr = document.createElement('tr')
        
        tr.innerHTML = `<td data-label="Nombre"> ${solicitudLs.nombre}</td> 
                      <td data-label="Apellido">${solicitudLs.apellido}</td>
                      <td data-label="Email">${solicitudLs.email}</td> 
                      <td data-label="Numero">${solicitudLs.numero}</td>
                      <td data-label="Motivo">${solicitudLs.motivo}</td>`

        tbody.appendChild(tr);

    }

})
let stackT = document.querySelector("#t-stack")
let logoHtml = document.querySelector("#logo-1")
console.log(stackT)
window.addEventListener('resize', function ponerColumna() {
    window.innerWidth < 1000 ? (
        stackT.classList.add("flex-column", "align-items-center"),
        document.querySelector("#logos-col-1").classList.add("flex-column"),
        document.querySelector("#logos-col-2").classList.remove("justify-content-center"),
        document.querySelector("#logos-col-2").classList.add("flex-column"))
        : (stackT.classList.remove("flex-column", "align-items-center"),
            document.querySelector("#logos-col-2").classList.add("justify-content-center"),
            document.querySelector("#logos-col-1").classList.remove("flex-column"),
            document.querySelector("#logos-col-2").classList.remove("flex-column"))
});

window.innerWidth < 1000 ? (
    stackT.classList.add("flex-column", "align-items-center"),
    document.querySelector("#logos-col-1").classList.add("flex-column"),
    document.querySelector("#logos-col-2").classList.remove("justify-content-center"),
    document.querySelector("#logos-col-2").classList.add("flex-column"))
    : (stackT.classList.remove("flex-column", "align-items-center"),
        document.querySelector("#logos-col-2").classList.add("justify-content-center"),
        document.querySelector("#logos-col-1").classList.remove("flex-column"),
        document.querySelector("#logos-col-2").classList.remove("flex-column"))
const mostrarN = document.querySelector("#nombre");
//Counter es para evitar que hay mas de span
let counter = 0;
mostrarN.addEventListener("mouseenter", function mostrarNombre(e) {


    if (counter == 0) {
        const span = document.createElement('span');
        span.innerHTML = `<span class="nombre" id="spanName">${"Franco Martin Minati"}</span>`
        mostrarN.appendChild(span);
        counter++
    }

})

mostrarN.addEventListener("mouseleave", function quitarNombre(e) {
    setTimeout(() => {
        if (document.querySelector("#spanName") != null) {
            document.querySelector("#spanName").remove();
            counter--
        }
    }, 1500)

})