// Todos los objetos del hmtl son accesibles mediante el uso del objeto global: document
// getElement sirve para agarrar un elemento, hay distintas variantes: byID, byClass, etc
// En vez de usar getElement es mas recomendable usar querySelector pq crea un array y no una coleccionHTML
// Aun asi con los dos se puede trabajar tranquilamente
// Con className puedo agregar clases

//Secciones donde esta trabajando el script

//Agregado del titulo
//Agregado de la descripcion
const textoTitulo = prompt("Ingrese un titulo")
const descripcion = prompt("Ingrese una descripcion")
document.getElementById("titulo").innerText = textoTitulo
document.getElementById("descripcion").innerText = descripcion

//Pedido de personas
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
let cantidadPersonas = parseInt(prompt("¿Cuantas personas desea agregar?"))
const personas = []

for (let i = 0; i < cantidadPersonas; i++) {
    const nombrePersona = prompt("Ingrese nombre")
    const apellidoPersona = prompt("IngreseApellido")
    const edadPersona = parseInt(prompt("Ingrese su edad"))
    const nuevaPersona = new Persona(nombrePersona, apellidoPersona, edadPersona)
    personas.push(nuevaPersona)
}

const tbody = document.getElementById('body');
document.getElementById('tabla').style.borderSpacing="50px";
for (const persona of personas) {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td> ${persona.nombre}</td> 
                  <td>${persona.apellido}</td>
                  <td>${persona.edad}</td> `
   
    tbody.appendChild(tr);
}
const btn=document.getElementById('btn')
const inputColor=document.getElementById('color')
btn.addEventListener("click",cambioColor);
function cambioColor(){
    document.body.style.backgroundColor=inputColor.value;
}