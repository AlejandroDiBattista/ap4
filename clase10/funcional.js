
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar5(lista) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        if (valor > 5) {
            resultado.push(valor);
        }
    }
    return resultado;
}

function filtrar3(lista) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        if (valor <= 3) {
            resultado.push(valor);
        }
    }
    return resultado;
}

function filtrar(lista, condicion) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        if (condicion(valor)) {
            resultado.push(valor);
        }
    }
    return resultado;
}


console.log(numeros)
console.log(filtrar5(numeros))
console.log(filtrar5([1, 17, 4, 20, 4, 15]))
console.log(filtrar3(numeros))

console.log("----")
console.log(filtrar(numeros, valor => valor > 5));
console.log(filtrar(numeros, valor => valor <= 3));
console.log(filtrar(numeros, valor => valor % 2 == 0));
console.log(filtrar(numeros, valor => valor % 3 == 0));

function mayoresQue7(valor) {
    return valor > 7;
}
console.log(filtrar(numeros, mayoresQue7));

Array.prototype.filtrar = function (condicion) {
    let resultado = []
    for (let i = 0; i < this.length; i++) {
        let valor = this[i];
        if (condicion(valor)) {
            resultado.push(valor);
        }
    }
    return resultado;
}

console.log("Con FILTRAR") // Hecha por nosotros
console.log(numeros.filtrar(valor => valor < 7));
console.log([1, 10, 30].filtrar(x => x % 5 == 0))

console.log("Con FILTER") // Viene con el lenguaje
console.log(numeros.filter(valor => valor < 7));
console.log([1, 10, 30].filter(x => x % 5 == 0))

// Filtrar
const esPar = x => x % 2 == 0;

console.log("Ejemplo filter")
console.log(numeros.filter(x => x % 2 == 0))
console.log(numeros.filter(esPar))

// Mapear
console.log("Ejemplo map")

console.log(numeros.map(x => x * 2)) //El doble
console.log(numeros.map(x => x * x)) //El cuadrado
console.log(numeros.map(x => x * 5)) //El quintuple

// Reducir

console.log("Ejemplo de reduce")

console.log(numeros.reduce((suma, elemento) => suma + elemento, 0))
console.log(numeros.reduce((producto, elemento) => producto * elemento, 1))

// Find

console.log("Ejemplo de find")
console.log(numeros.find(x => x % 3 == 0));
console.log(numeros.find(x => x > 7));

console.log(numeros
    .filter(x => x % 2 == 0)
    .map(x => x * x)
    .find(x => x > 7)
)

// Some

console.log("Ejemplo de Some")
console.log(numeros.some(x => x % 7 == 0)) // Es multiplo de 7?
console.log(numeros.some(x => x % 17 == 0)) // Es multiplo de 17?

// Every

console.log("Ejemplo de Every")
console.log(numeros.every(x => x % 7 == 0)) // Es multiplo de 7?
console.log(numeros.every(x => x % 17 == 0)) // Es multiplo de 17?
console.log(numeros.every(x => x < 20)) // Es multiplo de 17?
console.log(["Juan", "Pedro", "Luis"].every(n => n.length >= 1));
console.log(["Juan", "Pedro", "Luis"]
    .map(x => x.length)
    .every(l => l >= 1));

