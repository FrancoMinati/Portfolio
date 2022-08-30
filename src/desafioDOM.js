/* let boton = document.querySelector("#colorChange")
let lampara = document.querySelector("#lamp");
let counter = 1
boton.addEventListener("click", cambiarColor, counter)

function cambiarColor() {
    counter++
    (counter % 2 == 0) ?
        (document.documentElement.style.filter = "grayscale(1)",
            lampara.classList.remove("bi-lightbulb-fill"),
            lampara.classList.add("bi-lightbulb"))
        :
        (document.documentElement.style.filter = "grayscale(0)",
            lampara.classList.remove("bi-lightbulb"),
            lampara.classList.add("bi-lightbulb-fill"))
}
 */
//Selecciono los divs de los hexagonos mediante la busqueda de todos los que contengan la clase hex
let hex = document.querySelectorAll(".hex")
/*Los almaceno en un array con push y obteniendo su id para posteriormente trabajar con ellos
 y obtener ademas la cantidad de hexagonos*/

let hexArray = []
for (let i = 0; i < hex.length; i++) {
    /*Para obtener su id concateno la palabra hex junto con i+1 pq sus ids parten desde 1*/
    hexArray.push(document.getElementById("hex" + (i + 1)))
}
/* No encontre otra forma para asignar la funcion a cada hexagono si no era almacenando
cada una de estas en arrays, ya que probe mandando simplente el valor de la posicion 
para que con un getId usara  algo similar a esto 
document.getElementById("hex" + (i + 1))) y le asignara la funcion, pero no funcionaba.
Asi que tras probar muchas cosas, llegue a este metodo que me funciono y a mi parecer tiene
sentido.

Te comento todo esto juan, para que veas el proceso nomas.*/
/*Almaceno las funciones en arrays*/
/* let mostrarA=[]
let ocultarA=[]
for(let j=0;j<hexArray.length;j++){
    mostrarA.push(function mostrar(){
        hexArray[j].querySelector(".hex-txt").style.visibility="visible"
    })
    ocultarA.push(function ocultar(){
        hexArray[j].querySelector(".hex-txt").style.visibility="hidden"
    })
    
}
/* Hago uso de los eventos mouseover y mouseout para mostrar el texto en los hexagonos*/
/* for(let k=0;k<hexArray.length;k++){
    hexArray[k].addEventListener("mouseover",mostrarA[k])
    hexArray[k].addEventListener("mouseout",ocultarA[k],true)
}
 */

// Esto lo dejo comentado pq fue como me di cuenta de como hacer lo de los hexagonos
/*
hexArray[0].addEventListener("mouseover",mostrar)
hexArray[0].addEventListener("mouseout",ocultar,true)

function mostrar(){
    hexArray[0].querySelector(".hex-txt").style.visibility="visible"
}
function ocultar(){
    hexArray[0].querySelector(".hex-txt").style.visibility="hidden"
}
*/

