
const alejandro = {
    nombre: 'Alejandro',
    edad: 55,

    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

const juan = {
    nombre: 'Juan',
    edad: 55,

    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

console.log(alejandro.nombre)
console.log(alejandro.edad)
alejandro.saludar()
juan.saludar()

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad 
    }

    saludar() {
        console.log(`¡¡ Hola, soy ${this.nombre} y tengo ${this.edad} años !!`)       
    }

    cumplirAños() {
        this.edad++;
    }
}

const j = new Persona("Jose", 20)
const m = new Persona("Maria", 17)

j.saludar()
j.cumplirAños()
j.saludar()


class Array {
    get length() {return 0}
    
    push(valor) {
        //
    }
    
    pop() {
        return //..
    }
}

let a = new Array()
a.push(10)
a.push(20)
console.log(a.length);

let b = [] // Creo implicitamente la clase
b.push(10)
b.push(20)
console.log(b.length);

let c = [10, 20]; // Creo y agrego elementos al array
console.log(c.length);

