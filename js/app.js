
const tabla = document.querySelector(".table")

btnProducto1 = document.querySelector("#btnProducto1")
btnProducto2 = document.querySelector("#btnProducto2")
btnProducto3 = document.querySelector("#btnProducto3")

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre
        this.unidades = 1
        this.precio = precio
        this.total = precio
    }

}

const producto1 = new Producto ("Long Live The King", 40)
const producto2 = new Producto ("Revolution MMXXIII", 55)
const producto3 = new Producto ("Goddess Revolution", 45)

let carrito = []


btnProducto1.addEventListener('click', function() {
    agregarProducto(producto1)
    mostrarTabla()
});
btnProducto2.addEventListener('click', function() {
    agregarProducto(producto2)
    mostrarTabla()
});
btnProducto3.addEventListener('click', function() {
    agregarProducto(producto3)
    mostrarTabla()
});

function agregarProducto(producto){
    console.log("Click");

    if (carrito.includes(producto)){
        producto.unidades++;
        producto.total = producto.unidades * producto.precio
    }
    else{
        carrito.push(producto);

    }
    }
    
function mostrarTabla (){
    borrartabla();

    const carritoStr = JSON.stringify(carrito)
    localStorage.setItem("carritoJs", carritoStr)

    const lista = JSON.parse(localStorage.getItem("carritoJs"))

    for (var i = 0; i < lista.length; i++) {

        let fila = tabla.insertRow();
        let celdaProducto = fila.insertCell();
        let celdaUnidades = fila.insertCell();
        let celdaPrecio = fila.insertCell();
    
        celdaProducto.innerHTML = lista[i].nombre;
        celdaUnidades.innerHTML = lista[i].unidades;
        celdaPrecio.innerHTML = `$${lista[i].total } `;
      } 
      console.log(lista);
}


function borrartabla(){
    let filas = tabla.rows.length;
    
    for (var i = 1; i < filas; i++) {
        tabla.deleteRow(1);
      } 
}