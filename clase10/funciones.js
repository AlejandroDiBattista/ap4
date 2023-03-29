// Declaracion de función
function incrementar(a) {
    return a + 1;
}
// Declaracion de una funcion como expresión. 
const incrementar1 = function (a) {
    return a + 1;
}

// Declaracion de una funcion usando flecha gorda. (Expresion lambda)
const incrementar2 = (a) => {
    return a + 1;
}

// Declaracion de un funcion usando flecha gorda cuando solo tiene una sentencia return

const incrementar3 = (a) => a + 1;

// Cuando solo tiene un parametro 
const incrementar4 = a => a + 1;

console.log(incrementar(5))
console.log(incrementar1(5))
console.log(incrementar2(5))
console.log(incrementar3(5))
console.log(incrementar4(5))


console.log(incrementar4);
console.log((a) => a + 1);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarSimple(lista) {
    for (let i = 0; i < lista.length; i++){
        let valor = lista[i];
        console.log(`El valor para ${i} es ${valor}`);
    }
}

function mostrarDoble(lista) {
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        console.log(`El doble del valor para ${i} es ${valor * 2}`);
    }
}

function simple(i, valor) {
    console.log(`El valor para ${i} es ${valor}`);
}

function doble(i, valor) {
    console.log(`El doble del valor para ${i} es ${valor * 2}`);
}

function triple(i, valor) {
    console.log(`x3 ${valor * 3}`);
}

function mostrar(lista, funcion) {
    console.log("Mostrando la lista")
    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        funcion(i, valor);
    }
}


console.log("---");
mostrarSimple(numeros); //
mostrarDoble(numeros);

mostrar(numeros, simple);
mostrar(numeros, doble);
mostrar(numeros, triple);

mostrar(numeros,
    (i, valor) => console.log(`x4 ${valor * 4}`)
);

function mostrarTabla(base) {
    console.log(`Tabla del ${base}`)
    for (let i = 1; i <= 10; i++){
        console.log(`${i} x ${base} = ${i*base}`)
    }
}

mostrarTabla(5);
mostrarTabla(6);

function jQuery(selector) {
    return {
        nombre: "Juan",
        saludar: function () {
            console.log(`Hola, soy ${this.juan}`);
        }
    }
}

const $ = jQuery;

jQuery("aaa")

$("aaa").saludar();


let suma = 0;
let persona1 = "Juan"
let persona_1 = "Juan 2"
let _persona = "Juan 3"

