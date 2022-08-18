const Persona = [{ nombre: "franco", apellido: "minati", dni: 43212872 },
{ nombre: "cecilia", apellido: "rosas", dni: 43254211 },
{ nombre: "franco", apellido: "ramos", dni: 43222215 },
{ nombre: "franco", apellido: "perez", dni: 44212855 }]


let n = localStorage.setItem("userN", Persona[0].nombre)
let a = localStorage.setItem("userA", Persona[0].apellido)
let dni = localStorage.setItem("userD", Persona[0].dni)
console.log(localStorage.getItem("userN"))
console.log(localStorage.getItem("userA"))
console.log(localStorage.getItem("userD"))

const guardadoLocal = (key, value) => { localStorage.setItem(key, value) }

for (const p of Persona) {

    guardadoLocal(p.dni, JSON.stringify(p))
}

guardadoLocal("users", JSON.stringify(Persona))
console.log(localStorage.getItem("users"))

// Recuperacion de "usuarios" ya creados, recuperacion de info en local storage
//Orden de recuperacion
//Lo recupero usando stringify con localStorage y getItem
//Despues debo parsearla para poder trabajar
let user;
let userLs = JSON.stringify(localStorage.getItem("user"))

if (userLs != "null") {
    //Si no lo parseo no puedo trabajar con lo recuperado
    user=JSON.parse(userLs)
    console.log("Bienvenido " + user.toUpperCase())
    console.log(user)
    let p = prompt("desea borrar su usuario? S/N")
    if (p.toUpperCase() == "S") {
        localStorage.removeItem("user")
    }
} else {
    user = localStorage.setItem("user", prompt("Ingrese nombre de usuario"))
}

