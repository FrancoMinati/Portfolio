//Funciones simples
/*
function sumar(){
    let num=Number(prompt("Ingrese un numero"))
    let num2=Number(prompt("Ingrese un numero"))
    alert(num+num2)
}*/
//Funcion parametrizada
/*
function mostrarNombreCompleto(nombre, apellido){
    alert("Bienvenido "+ nombre + " " + apellido)
}*/
// Funcion usando casos
/*
function calculadora(primerNum, segundoNum, operacion) {
    switch (operacion) {
        case "+":
            return primerNum+segundoNum
            break
        case "-":
            return primerNum-segundoNum
            break
        case "*":
            return primerNum*segundoNum
            break
        case "/":
            if(segundoNum!=0){
                return primerNum/segundoNum
            }else{
                return "error"
            }
            break
        default:
            return "Operacion invalida"
            break
    }
}
console.log(calculadora(10,10,"+")) */
// Almacenado de funciones en variables 
const sumar= function(num1,num2){return num1+num2}
//Funcion flecha
const sumarFlecha= (num1,num2)=>{return num1+num2}
const restarFlecha= (num1,num2)=>{return num1-num2}
const iva=(num)=>{return num*0.21}
console.log(sumar(5,10))
console.log(sumarFlecha(9,10.5))

//Calcular el precioProducto +iva - Descuento
let precioProducto = 500
let descuento=50
let nuevoPrecio=restarFlecha(sumarFlecha(precioProducto,iva(precioProducto)), descuento)
console.log("El nuevo precio es: "+nuevoPrecio)