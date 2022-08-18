let boton = document.querySelector("#colorChange")
let counter = 0

boton.addEventListener("click", cambiarColor, counter)

function cambiarColor() {
    if (counter % 2 == 0) {
        document.documentElement.style.filter = "grayscale(1)"

        document.querySelector("#lamp").classList.remove("bi-lightbulb-fill")
        document.querySelector("#lamp").classList.add("bi-lightbulb")
    } else {
        document.documentElement.style.filter = "grayscale(0)"

        document.querySelector("#lamp").classList.remove("bi-lightbulb")
        document.querySelector("#lamp").classList.add("bi-lightbulb-fill")
    }
    counter++

}

let hex = document.querySelectorAll(".hex")
let hexArray = []
for (let i = 0; i < hex.length; i++) {
    hexArray.push(document.getElementById("hex" + (i + 1)))
}

let mostrarA=[]
let ocultarA=[]
for(let j=0;j<hexArray.length;j++){
    mostrarA.push(function mostrar(){
        hexArray[j].querySelector(".hex-txt").style.visibility="visible"
    })
    ocultarA.push(function ocultar(){
        hexArray[j].querySelector(".hex-txt").style.visibility="hidden"
    })
    
}
for(let k=0;k<hexArray.length;k++){
    hexArray[k].addEventListener("mouseover",mostrarA[k])
    hexArray[k].addEventListener("mouseout",ocultarA[k],true)
}
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