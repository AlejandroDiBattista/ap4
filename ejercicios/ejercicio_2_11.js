// Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario(no puede ser mayor de 10, realizar la validación):
// 1
// 12
// 123
// 1234
// 12345
// 123456
function piso(nivel) {
    let cadena = "";
    for (let i = 1; i <= nivel; i++) {
        cadena = cadena + i;
    }
    return cadena;
}

function mostrarPiramide(nivel) {
    if (nivel < 1 || nivel > 10) {
        console.log("ERROR");
        return;
    }
    for (let n = 1; n <= nivel; n++) {
        console.log(piso(n));
    }
}

mostrarPiramide(5);
mostrarPiramide(7);
mostrarPiramide(11);