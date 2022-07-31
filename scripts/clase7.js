//FUNCIONES DE ORDEN SUPERIOR
/* Esta funcion retorna otra funcion, basicamente sirve para no crear muchas
funciones iguales es un parametrizador de funciones por asi decirlo */
function mayorQue(n){
    return (m)=> m>n
}
/*Aca mayorQueCien y mayorQueCin..... son variables que almacenan la funcion
mayorQue con limites en 100 y 5000*/
let mayorQueCien=mayorQue(100)
let mayorQueCincoMil=mayorQue(5000)
//console.log(mayorQueCien(parseInt(prompt("Ingrese un numero"))))
console.log(mayorQueCincoMil(6000))

function asignarOperacion(op){
    if(op =="sumar"){
        return (a,b)=> a+b
    }else if(op=="restar"){
        return (a,b)=> a-b
    }
}
//Estas dos son variables que guardan una funcion
let suma=asignarOperacion("sumar")
let resta=asignarOperacion("restar")

console.log(suma(4,5))
console.log(resta(4,5))
//Esta funcion tiene de parametros un array y otra funcion, esta le envia cada
//elemento del array a otra funcion
function xcadauno(arr,fn){
    for(const el of arr){
        fn(el)
    }
}
const numeros = [1,2,3,4,5]
//si mando console.log como funcion es lo mismo que usarlo normalmente
xcadauno(numeros,console.log)
let total=0
//funcion para usar el acumulador es un ejemplo
function acumular(n){
    total+=n
}
xcadauno(numeros,acumular)
console.log(total)

// FOREACH 
/*const numeros2 = [1,2,3,4,5]
numeros.forEach((num))=>{
    console.log(num)
}
*/
//FIND

const abc=[{h:1,b:2},{h:4,b:3}]

const resultado=abc.find((parametro) => parametro.h>2)
console.log(resultado)
//Tomarse tiempo de leer el resto y hacer resumen no me daba para hacerlo en clase
