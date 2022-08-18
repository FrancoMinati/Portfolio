
// Cree dos clases
//Producto con su nombre cantidad y precio el cual es generado por un metodo con random ya que no estamos usando bases de datos ni arrays por ahora
class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
    }
    //Genera el precio usando un random y unas cuentas x como para simular algo
    generarPrecioRNG() {
        this.precio = (((Math.random() * (5000 - 1) + 1) * 2) / 3).toFixed(2)
    }
    //Calcula cantidad por precio para sacar el total
    generarTotal() {
        return this.cantidad * this.precio
    }
}
//Cliente tiene dos atributos nombre y el producto que compra como asociacion y un metodo que verifica que el nombre ingresado no sea nulo ni vacio
class Cliente {
    constructor(nombreCliente, producto) {
        this.nombreCliente = nombreCliente
        this.producto = producto
    }
    verifNombre() {
        if (this.nombreCliente == null || this.nombreCliente == "") {
            return true
        } else {
            return false
        }
    }
}
//salir true para el while, un alert de bienvenida y se crea un objeto cliente seteando el atributo producto como null por ahora

alert("Bienvenido al carrito de compras")
const clientes=[]
//Voy a usar un bucle for para 2 clientes y almacenarlos en un array
for(let i=0;i<2;i++){
let nuevoCliente = new Cliente(prompt("Ingrese su nombre"), null)
let salir = true
const productos=[]
while (salir) {
    
    //entra al while y verifica que el cliente tenga su nombre asignado haciendo uso del metodo verifnombre, si se confirma hace break del otro while
    while (true) {
        if (nuevoCliente.verifNombre()) {
            nuevoCliente.nombreCliente = prompt("Ingrese su nombre")
        }else{
            break
        }
    }
    //Se trabaja de a un producto por ahora ya que no hemos visto arrays pero se hace ingreso de los atributos nombre del producto y cantidad
    let nuevoProducto = new Producto(prompt("Ingrese el nombre del producto"), parseFloat(prompt("Ingrese la cantidad a llevar")))
    //Se genera el precio del producto
    nuevoProducto.generarPrecioRNG()
    //agrego cada objeto de producto al array
    productos.push(nuevoProducto);

    //If para salir 
    if (prompt("Desea seguir agregando productos").toUpperCase() == "NO") {
        salir = false
        //agrego el array al cliente como atributo
        nuevoCliente.producto=productos;
    }
    
}
clientes.push(nuevoCliente)
}
console.log("Se listara la compra de cada cliente")
//Muestra la compra de cada cliente
for(const cliente of clientes){
    console.log("Para el señor/a: "+cliente.nombreCliente)
    console.log("--------PRODUCTOS----------------")
    for(const producto of cliente.producto){
        
        console.log("Nombre: "+producto.nombre+"\nCantidad: "+producto.cantidad+"\nPrecio: "+producto.precio)
        }
}

//Por ahora se pide el ingreso de productos sin la verificacion de que estos existan, pero habria que hacer uso de una BD para verificar estas cosas
//Asi que asumo que este mini ejercicio cumple con lo pedido 