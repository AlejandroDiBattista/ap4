let a = {
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

let b = a;

a.nombre = "Pedro";
console.log(a);
console.log(b);

