//Ternarios

let temperatura=15;
//If Else
temperatura>15 ? alert("Que calor") : console.log("Dia Riki");
//Condicion    ?  true              :  false

//And es un if simple
const presion=0;
presion === 0 && console.log("La presion es 0");

//Or esto u lo otro con la condicion de que la condicion de que
//Sea distinto de 0, null, undefined, NaN, False o string vacio
console.log(0 || "Falsy");

/*Si JSON.parse tiene un valor valido, es decir tiene algún dato, 
en carrito se guardan esos datos del localStorage, si no existen datos, 
en carrito se guarda un arreglo vacío*/

let zapatilla=localStorage.setItem("Caniche","Perro tuerto");
let zapatillaLS=JSON.stringify(localStorage.getItem("Caniche"));
console.log(JSON.parse(zapatillaLS))



let carrito= console.log(JSON.parse(localStorage.getItem("carro")) || []);

// ?? NULLISH COALESCING

console.log(null ?? "Nullish");

// Acceso condicional a objeto .? sirve para acceder aun objeto 
//O comprobar si este existe

const zapatos=[{ talle:43 , peso:2.4},{talle: null}]

for(const z of zapatos){
console.log("Iterando\n" + ( 
z.talle || "No hay nada"))}