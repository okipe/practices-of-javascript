// "use strict";

function crearContador(contador = 0) {

    return {
        incrementar: function() {
            contador = contador + 1;
            return contador;
        },

        decrementar: function() {
            contador = contador - 1;
            return contador;
        },

        obtenerValor: function() {
            return contador;
        }
    };
}

// Contexto de ejecución (environment record) 1
const contador1 = crearContador(10);


// // Contexto de ejecución (environment record) 2
// const contador2 = crearContador()
// contador2.incrementar();
// contador2.decrementar();
// contador2.decrementar();
// contador2.obtenerValor();
// // contador1();