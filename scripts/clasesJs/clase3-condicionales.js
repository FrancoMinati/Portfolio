// FOR
//Ejemplo de pedir un numero por prompt y que calcule la tabla hasta el 10
//Se usa Number para tomar tanto floats como ints y parsearlos
/*
let numTabla=Number(prompt("Calcular la tabla de: "))
for(let i=1;i<11;i++){
    console.log("[ "+numTabla+" x "+ i+" ] = "+Number(numTabla*i).toFixed(2))
    // alert("[ "+numTabla+" x "+ i+" ] = "+Number(numTabla*i).toFixed(2))

}
*/
//Ejemplo break for
/*
alert("contando hasta 0 para cerrar el sitio")
for(let i=99;i>=0;i--){
    
    let salida=prompt("Desea detener la cuenta regresiva? Escriba SI")
    if(salida=="SI"|| salida=="si"||salida=="Si"){
        alert("Se detuvo el cierre")
        break
    }
    alert("Intentos restantes: "+ i)
}
*/

//WHILE
//Ejemplo while
// Es un while true con un break para salir

while (true) {
    let loQueIngresaElUsuario = prompt("Ingrese algo - Si desea salir ingrese salir")
    console.log(loQueIngresaElUsuario)
    if (loQueIngresaElUsuario == "salir" || loQueIngresaElUsuario == "Salir" || loQueIngresaElUsuario == "SALIR") {
        break
    }
}
//SWITCH
/*
let numeroIngresado = parseInt(prompt("Ingrese un numero"))
switch (numeroIngresado) {
    case 23:
        alert("Te ganaste una moto")
        break
    case 442:
        alert("Te ganaste una pata de jamon")
        break
    case 312:
        alert("Te ganaste un vinito")
        break
    case 420:
        alert("Te ganaste el MILLON")
        break
    default:
        alert("Segui participando")

}*/