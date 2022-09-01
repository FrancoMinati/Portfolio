import {email,numero} from './formElements.js'
export default class Formulario {
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
