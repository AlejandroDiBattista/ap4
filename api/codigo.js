

let a = 10;

let o = { nombre: "Pepe", edad: 23 };

// JSON -> JavaScript Object Notation
// Es un formato de texto para representar objetos
// Es un formato de texto para representar arrays
// Es un formato de texto para representar valores primitivos

let carrito = {
    id: 123,
    fecha: "2020-01-01",
    productos: [
        { id: 1, nombre: "P1", precio: 23 },
        { id: 2, nombre: "P2", precio: 34 },
        { id: 3, nombre: "P3", precio: 45 },
    ],
    total: 1000,
}

console.log(carrito);

function mostrarCarrito() {
    console.log("Este es el carrito");
}

setInterval(mostrarCarrito, 1000);
