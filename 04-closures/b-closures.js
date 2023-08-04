// "use strict";

function crearContador() {
    let contador = 0;

    // setTimeout(function() {
        // contador = 100;
    // }, 5000)

    return function incrementar() {
        contador = contador + 1;
        return contador;
    }
}

// Contexto de ejecución (environment record) 1
const contador1 = crearContador();
contador1();
contador1();
contador1();

// Contexto de ejecución (environment record) 2
const contador2 = crearContador()

// contador1();