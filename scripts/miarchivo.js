alert("Hola bienvenido a la calculadora de divisiones")
// exit es el valor que usara para cerrar el while true
let exit = true;
while (exit) {
    // Aca se hace pedido de los numeros a dividir
    let numeroUno = Number(prompt("Ingrese un numero"))
    let numeroDos = Number(prompt("Ingrese un numero"))
    //Si el divisor es 0 el if suelta que es invalido, de lo contrario se divide
    if (numeroDos != 0) {
        alert(numeroUno / numeroDos)
        console.log(numeroUno / numeroDos)
    } else {
        alert("Operacion invalida, no es posible la division por 0")
    }
    //While true para verificar la salida del programa
    while (true) {
        //Se pregunta si se desea salir, tipeando si o no
        let salir = prompt("¿Desea salir? SI/NO")
        //Si se escribe si, el programa setea exit como false para cerrar el otro while
        //y hace break para salir de este while
        if (salir == "SI" || salir == "si") {
            exit=false
            break
        //Si se escribe no, por alert escribe que se reinicia el bucle y hace break del while true
        } else if (salir == "NO" || salir == "no") {
            alert("Reiniciando calculadora")
            break
        //Si se ingresa algo distinto de Si o No muestra esto
        } else {
            alert("¡RESPUESTA INVALIDA!")
        }
    }

}