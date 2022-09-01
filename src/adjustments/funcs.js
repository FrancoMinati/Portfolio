//Re acomodamiento de columnas
function ponerColumna() {
    let stackT = document.querySelector("#t-stack")
    let logoHtml = document.querySelector("#logo-1")
    window.innerWidth < 1000 ? (
        stackT.classList.add("flex-column", "align-items-center"),
        document.querySelector("#logos-col-1").classList.add("flex-column"),
        document.querySelector("#logos-col-2").classList.remove("justify-content-center"),
        document.querySelector("#logos-col-2").classList.add("flex-column"))
        : (stackT.classList.remove("flex-column", "align-items-center"),
            document.querySelector("#logos-col-2").classList.add("justify-content-center"),
            document.querySelector("#logos-col-1").classList.remove("flex-column"),
            document.querySelector("#logos-col-2").classList.remove("flex-column"))
}

window.addEventListener("resize",ponerColumna)
ponerColumna();
export * as adjust from './adjustments/funcs.js'