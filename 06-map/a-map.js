const pcModels = ['PC', 'PC XT', 'PC AT', 'PCJr', 'PS/2'];

const ibmBranded = pcModels.map(item => 'IBM ' + item);

console.log('without brand', pcModels);
console.log('with brand', ibmBranded);