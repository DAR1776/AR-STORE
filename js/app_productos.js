
const tabla = document.querySelector(".table")

btnProducto1 = document.querySelector("#btnProducto1")
btnProducto2 = document.querySelector("#btnProducto2")
btnProducto3 = document.querySelector("#btnProducto3")

btnPagarCompra = document.querySelector("#btnPagarCompra")

let carrito = []

let catalogo = []

const pedirCatalogo = async()=> {
    const respuesta = await fetch('../js/data.json')
    catalogo = await respuesta.json()
    console.log(catalogo)
}

pedirCatalogo()


btnProducto1.addEventListener('click', function() {
    agregarProducto(catalogo[0])
    mostrarTabla()
});
btnProducto2.addEventListener('click', function() {
    agregarProducto(catalogo[1])
    mostrarTabla()
});
btnProducto3.addEventListener('click', function() {
    agregarProducto(catalogo[2])
    mostrarTabla()
});

btnPagarCompra.addEventListener('click', function(){
    if (carrito.length == 0){
        Swal.fire(
            'Tu carrito esta vacio',
            'Agraga algo a tu carrito para cancelar la compra',
            'error'
          )
    }
    else{
        Swal.fire(
            'Compra Exitosa',
            'Se ha completado su compra con exito',
            'success'
          )
        borrartabla()
    }

})

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
        celdaPrecio.innerHTML = `$${lista[i].total} `;
      } 
      console.log(lista);
}

function borrartabla(){
    let filas = tabla.rows.length;
    
    for (var i = 1; i < filas; i++) {
        tabla.deleteRow(1);
      } 
}  

//FORM

let btnEnviarFormulario = document.querySelector("#btnEnviarFormulario")

function enviarForm() {

    let inputName = document.querySelector("#inputName")
    let inputComment = document.querySelector("#inputComment")
    let inputEmail = document.querySelector("#inputEmail")

    const inputNameStr = JSON.stringify(inputName)
    const inputCommentStr = JSON.stringify(inputComment)
    const inputEmailStr = JSON.stringify(inputEmail)

    localStorage.setItem("inputName", inputNameStr)
    localStorage.setItem("inputComment", inputCommentStr)
    localStorage.setItem("inputEmail", inputEmailStr)
}

btnEnviarFormulario.addEventListener('click', function() {
    enviarForm()
});


