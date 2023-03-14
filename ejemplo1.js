let sueldos = [2000, 3000, 1500, 4000, 700];

console.log(sueldos);

// Recorrer el array con un for
for(let i = 0; i < sueldos.length; i++) {
    console.log(">" + sueldos[i]);
}

console.log("------------");
sueldos.forEach(function (sueldo) {
    console.log(")" + sueldo);
});

