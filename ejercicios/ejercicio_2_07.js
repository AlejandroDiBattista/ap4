// Caso de uso de palindros
// radar
// anana
// oso
// 12321
// Memem    // No debe tomar en cuenta las mayusculas
// MAL: maria
// Comparar la primera con la ultima, la segunda con la penultima y asi sucesivamente


let c = "anana"
function esPalindromo(c) {   
    c = c.toLowerCase(); // Convierte a minusculas
    let i = 0;          
    let u = c.length - 1;
    
    while (i < u) {
        if (c[i] != c[u]) {
            return false;
        }
        i++;
        u--;
    }
    
    return true;
}

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("anana")); // true
console.log(esPalindromo("Marin")); // false
console.log(esPalindromo("Menem")); // true


// Invertir la cadena y compararla 
function esPalindromo2(c) {
    c = c.toLowerCase();
    let c2 = c.split("").reverse().join("");
    return c === c2;
}

console.log(esPalindromo2("radar")); // true
console.log(esPalindromo2("anana")); // true
console.log(esPalindromo2("Marin")); // false
console.log(esPalindromo2("Menem")); // true

function eliminarEspacios(c) {
    let salida = "";
    for(let i=0; i < c.length; i++) {
        if (c[i] != " ") {
            salida += c[i];
        }
    }
    return salida;
}

function esPalindromo3(c) {
    c = c.toLowerCase();
    c = eliminarEspacios(c);

    let salida = "";
    for(let i=0; i < c.length; i++) {
        salida = c[i] + salida;
    }
    return c === salida;
}

console.log(esPalindromo3("radar")); // true
console.log(esPalindromo3("anana")); // true
console.log(esPalindromo3("Marin")); // false
console.log(esPalindromo3("Menem")); // true

// Dabale arroz a la zorra el abad

console.log(esPalindromo2("Dabale arroz a la zorra el abad")); 