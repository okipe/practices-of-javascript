const numbers = [8, 3, 11, 6, 4, 2];
const maxNumber = numbers.reduce((acc, current) => Math.max(acc, current), -Infinity);
console.log(maxNumber);

// CONSOLE: 11

// Al usar -Infinity como valor inicial para acc, estás asegurando que en el proceso de reducción, cualquier número en el arreglo numbers será mayor que -Infinity.