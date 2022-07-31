//Arrays 

const nombres = ["Pablo", "Franco", "Cecilia"];
const nombres2 = ["Nacho", "Nano", "Negro"]
const numeros = [40, 50, 60, 70, 80]
console.log(nombres)
// UNSHIFT -> Agrega elementos al inicio del array
nombres.unshift("Pancracio")
// PUSH -> Agrega elementos al final del array
nombres.push("Mariano")
// SPLICE(posInicial, posFinal) -> Sirve para eliminar 1 o mas elementos desde cierta posicion
nombres.splice(1, 3)
// SLICE(posInicial, posFinal) -> Devuelve la copia de una porcion de un array guardado en un nuevo array
//Devuelve desde A hasta N-1
console.log(numeros.slice(1, 3))
// JOIN(caracterX) -> Genera un string del array separado por un caracter especificado
console.log(numeros.join("-"))
// arrayA.CONCAT(arrayB) -> concatena dos arrays 
const concatenacion = nombres.concat(nombres2)
console.log(concatenacion)
/* INDEXOF indexOf(elemento) -> devuelve la posicion de un elementos especificado
                       si no lo encuentra devuelve -1*/
console.log("Ejemplo: " + nombres2.indexOf("Nano"))
console.log("Ejemplo de no encontrado: " + nombres.indexOf("Pedro"))
// INCLUDES() -> se fija si un array contiene un elemento, retorna true o false
console.log(nombres2.includes("Franco"))
// REVERSE reordena el array desde el final hasta el principio y destruye el original

//Ejemplo de copiar un array y ahi hacerle reverse para no destruir el original
const n2r = (nombres2.slice(0, nombres2.length + 1)).reverse()
console.log(n2r)
// Ejemplo de uso de funciones con una funcion flecha
/* Se usa const para hacer la estructura no modificable, es posible modificar 
lo de adentro*/
const eliminar = (nombre) => {
    let index = nombres2.indexOf(nombre)
    if (index != -1) {
        nombres2.splice(index, 1)
    } else {
        console.log("No esta ese valor")
    }
}
eliminar("Na")

// ARRAY DE OBJETOS

const personas = [{ nombre: "Franco", dni: 43212871, sexo: "M" },
{ nombre: "Martina", dni: 44258974, sexo: "F" }]
/* for..in iterates over all enumerable property keys of an object
   for..of iterates over the values of an iterable object.*/
// esto es un tipo de forEach
for(const persona of personas){
    console.log(persona.nombre +" " + persona.dni + " "+persona.sexo)
}