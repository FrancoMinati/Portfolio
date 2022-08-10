alert("Bienvenido, el resto del texto se mostrara por consola")
// Creo dos clases: Usuario para tratar de generar usuarios de la pagina y Encargo para los pedidos
class Usuario {
    constructor(nombre, edad, email) {
        this.nombre = nombre
        this.edad = edad
        this.email = email
    }
}
class Encargo {
    constructor(tema, producto, planDePago) {
        this.tema = tema
        this.producto = producto
        this.planDePago = planDePago
    }
    printEncargo() {
        console.log("----------Su pedido es--------\nTema: " + this.tema + "\nProducto: " + this.producto + "\nPlan de pago: " + this.planDePago)
    }
}
//Use una funcion de 1er Orden llamada generar para ahorrar el proceso de generar los encargos y usuarios
function generar(m) {
    if (m == "U") {
        return (nombre, edad, email) => new Usuario(nombre, edad, email)
    } else if (m == "E") {
        return (tema, producto, planDePago) => new Encargo(tema, producto, planDePago)
    } else {
        return "Operacion Invalida"
    }
}
//Las funciones "hijas" que ahorran el proceso de creado
let crearUsuario = generar("U")
let crearEncargo = generar("E")
//Dos arrays para almacenar los encargos y los usuarios
let encargos = []
let usuarios = []
//Ingreso de datos para crear un usuario y su añadido al array 
const userName = prompt("Ingrese nombre de usuario")
const userAge = prompt("Ingrese su edad")
const userEmail = prompt("Ingrese su direccion de correo electronico")
const newUser = crearUsuario(userName, userAge, userEmail)
usuarios.push(newUser)
//Instancio un contador para el uso de un if que se va a usar para mostrar la lista de productos que el usuario añadio para llevar
let contador = 0


do {
    //Do While para los pedidos
    /*Si se escribe S se hace todo el pedido de datos y se agrega al array, posteriorme se muestra un mensaje
    de pedido procesado y se le suma +1 al contador*/
    let pedido = prompt("Desea realizar un pedido? S/N")
    if (pedido.toUpperCase() == "S") {
        const clientSubject = prompt("Ingrese el Tema de la pagina")
        const clientProduct = prompt("Ingrese el Producto que desea publicar")
        const clientPayment = prompt("Ingrese plan de pago(3/6/9/12 cuotas)")
        encargos.push(crearEncargo(clientSubject, clientProduct, clientPayment))
        console.log("*---------Pedido procesado---------*")
        contador++
    } else if (pedido.toUpperCase() == "N") {
    /*Se muestran los pedidos y se da un mensaje de despedida*/
        if (contador > 0) {
            console.log("Para:  " + newUser.nombre + " email: " + newUser.email)
            console.log("----------Pedidos---------")
            for (const en of encargos) {
                en.printEncargo()
            }
        }
        console.log("Hasta Pronto")
        break
    }
} while (true)