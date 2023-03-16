// 12. Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.

// bultos = 100, bultosPorCaja = 10
// 100 => 10 cajas completas y 0 bultos sueltos
// 53 => 5 cajas completas y 3 bultos sueltos
// 10 => 1 caja completa y 0 bultos sueltos
// 9 => 0 cajas completas y 9 bultos sueltos

// -50 => "ERROR";
// bultosProCaja = 0 => "ERROR"
// bultosPorCaja = -10 => "ERROR"

function calcularCajas(bultos, bultosPorCaja) {
    if (bultos < 0 || bultosPorCaja <= 0) {
        return "ERROR";
    }

    let cajas = 0;
    while( bultos >= bultosPorCaja) {
        bultos -= bultosPorCaja;
        cajas++;
    }
    return {cajas: cajas, bultos: bultos};
}

let resultado = calcularCajas(100, 10);

console.log('Cajas completas: ' + resultado.cajas);
console.log('Bultos sueltos: ' + resultado.bultos);


function calcularCajas2(bultos, bultosPorCaja) {
    if (bultos < 0 || bultosPorCaja <= 0) {
        return "ERROR";
    }

    let cajas = Math.floor(bultos / bultosPorCaja);
    let bultosSueltos = bultos % bultosPorCaja;

    return { cajas: cajas, bultos: bultosSueltos };
}

let bultos = prompt("Ingrese la cantidad de bultos");
let bultosPorCaja = prompt("Ingrese la cantidad de bultos por caja");

let resultado2 = calcularCajas2(bultos, bultosPorCaja);

console.log('Cajas completas: ' + resultado2.cajas);
console.log('Bultos sueltos: ' + resultado2.bultos);


function calcularCajas3(bultos, bultosPorCaja) {
    if (bultos < 0 || bultosPorCaja <= 0) {
        return "ERROR";
    }

    let bultosSueltos = bultos % bultosPorCaja;
    bultos -= bultosSueltos;
    let cajas = bultos / bultosPorCaja;

    return { cajas: cajas, bultos: bultosSueltos };
}

// Probando casos de uso
console.log(calcularCajas3(100, 10).bultos == 0);
console.log(calcularCajas3(53, 10).bultos == 3);

