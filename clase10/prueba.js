let esActivo = true;

function activar() {
    esActivo = true;
    //...
}

function desactivar() {
    esActivo = false;
    //...
}

const cambiar  = () => {
    if (esActivo) {
        desactivar();
    } else {
        activar();
    }
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

$(document).ready(function () {
    
    $("h1").click(
        () => {
            if (esActivo) {
                desactivar();
            } else {
                activar();
            }
        }
    );
    $("h1").click(() => esActivo ? desactivar() : activar());
    
    activar();
})