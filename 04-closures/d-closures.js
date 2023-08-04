function crearImpresoraMensajes(type, styles) {
    return function mensaje(str) {
        console.log(`%c ${type}: ${str}`, styles);
    }
}

const error = crearImpresoraMensajes('Error', 'background: red; color: white');
const warning = crearImpresoraMensajes('Advertencia', 'background: orange; color: white');
const success = crearImpresoraMensajes('Éxito', 'background: green; color: white');
const info = crearImpresoraMensajes('Información', 'background: blue; color: white');

/*
function error(str) {
    console.log(`%c Error: ${str}`, 'background: red; color: white;');
}

function warning(str) {
    console.log(`%c Warning: ${str}`, 'background: orange; color: white;');
}

function success(str) {
    console.log(`%c Éxito: ${str}`, 'background: green; color: white;');
}
*/