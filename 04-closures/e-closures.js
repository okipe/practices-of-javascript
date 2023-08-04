const defaultStyles = 'color: white;'; // no lo pongo dentro de la función para no cargar más memoria
function crearImpresoraMensajes(type, styles) {
    return function mensaje(str) {
        console.log(`%c ${type}: ${str}`, defaultStyles + styles);
    }
}

const error = crearImpresoraMensajes('Error', 'background: red;');
const warning = crearImpresoraMensajes('Advertencia', 'background: orange;');
const success = crearImpresoraMensajes('Éxito', 'background: green;');
const info = crearImpresoraMensajes('Información', 'background: blue; color: black;');

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


/* Si añado algo con
button.addEventListener('click', onClick);
tambien puedo sacarlo
button.removeEventListener('click', onClick);
*/