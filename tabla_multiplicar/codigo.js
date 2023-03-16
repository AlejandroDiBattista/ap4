function generarTabla() {
    let base  = +document.getElementById('numero').value; // + para convertir a número
    let tabla =  document.getElementById('resultado');    // elemento donde se mostrará la tabla  
    
    let salida = `<h2>Tabla del ${base}</h2>`;            // ` (comilla simple invertida) para usar variables dentro de la cadena "Template String"
    
    salida += '<table>';                                  // += para concatenar
    for(let i = 1; i <= 10; i++) {                        // Usa "Template String" multilinea para que se vea mejor
        salida += `                                       
            <tr>
                <td>${base}</td>
                <td> x </td>
                <td>${i}</td>
                <td>=</td>
                <td>${base * i}</td>
            </tr>`;
    }
    salida += '</table>';
    tabla.innerHTML = salida;
}