//Objetos
/*
const objetoUno={edad:10, peso: 20, nombre: "Franco Minati"}
const Animal={
    especie:"leon",
    patas:4,
    sexo:"M",
    tipo:"Carnivoro"
}

// Los objetos se suelen poner en mayuscula
alert(Animal.sexo)
console.log(Animal)
//Para cambiar el valor de una propiedad se llama al objeto en esa propiedad
Animal.especie="Pato"
Animal["patas"]=2

console.log(Animal.patas)
console.log(Animal.especie)
*/
/*
//Armado de objetos con funciones
function Animal(especie,patas,sexo){
    this.especie=especie
    this.patas=patas
    this.sexo=sexo
    this.rugir=function(){console.log("El "+especie+" ruge con todas sus fuerzas")}
}

const animal1=new Animal("Conejo",4,"H")
const animal2=new Animal("Tucan",2,"M")
animal1.rugir()
//console.log(animal2)
for(const propiedad in animal1){
    console.log(animal1[propiedad])
}*/
// Clases



class Persona {
    constructor(nombre,apellido,edad) {
        this.nombre = nombre
        this.apellido=apellido
        this.edad=edad
        
    }
    mostrarNombre(){
        console.log("Mi nombre es: " +this.nombre+" "+this.apellido)
    }
    verifMayoriaDeEdad(){
        if(parseInt(this.edad)>=18){
            console.log("Es mayor de edad")
        }else{
            console.log("Es menor de edad")
        }
    }
}

let cantidadPersonasAgregar=parseInt(prompt("Cuantas personas desea agregar?"))
for(let i=0;i<cantidadPersonasAgregar;i++){
    const personax=new Persona(prompt("Ingrese Nombre"),prompt("Ingrese Apellido"),parseInt(prompt("Ingrese edad")))
    personax.mostrarNombre()
    personax.verifMayoriaDeEdad()
}