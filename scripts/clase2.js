/*
if(true){alert("Es true!")}
if(false){alert("Es false!")}
let num=100
if(num>150){alert("Es mayor que 150!")}else{alert("Es menor que 150!")}
*/ 

/*EJEMPLO CON PARSEO
let num=parseFloat(prompt("Ingresa peso de la bolsa en kg:"))
if(num>2.5){
    console.log("Te vamos a hacer un descuentito: "+(num*100-num*30))
}else{
    console.log("Su total es: "+(num*100))
}*/

/* EJEMPLO DE INGRESO POR PROMPT
let unColor=prompt("Ingresa un color pa")
if(unColor=="Azul"){
    console.log("El color es Azul")
}else{
    console.log("El color es el que se te cante menos Azul")
}*/

//EJEMPLO OPERADORES PARA UN LOGGER

let nombreIngresado=prompt("Ingrese nombre")
let apellidoIngresado=prompt("Ingrese apellido")

if((nombreIngresado=="Franco" || nombreIngresado=="FRANCO" || nombreIngresado=="franco") && (apellidoIngresado=="MINATI" || apellidoIngresado=="Minati"|| apellidoIngresado=="minati")){
    alert("Bienvenido: Franco Minati")
}else if(nombreIngresado=="" || apellidoIngresado==""){
    alert("Debe completar los campos")
}else{
    alert("Acceso denegado")
}