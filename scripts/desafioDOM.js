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

