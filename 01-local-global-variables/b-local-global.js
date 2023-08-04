

function retroComputers() {
    if(true) {
        var computer1 = 'IBM PC';
        var computer2 = 'IBM XT';
        var computer3 = 'IBM AT';
        let computer4 = 'Apple Macintosh 128K';
        computer5 = 'Apple Macintosh 512K'; // sin var ni nada
        let computer6 = 'Apple Macintosh Plus';
        const computer7 = 'Commodore 64';
        const computer8 = 'Commodore 128';
        const computer9 = 'Amiga 1000';

        console.log("adentro " + computer1);
        console.log("adentro " + computer4); 
        console.log("adentro " + computer7); 
    }

    // var computer1 = 'ZX Spectrum';
    // var computer2 = 'Sinclair QL';afuera
    console.log("afuera " + computer2);
    console.log("afuera " + computer5); // it works!
    console.log("afuera " + computer8); // const does not work.
}

// console.log("Afuera: " + computer1);
// console.log("Afuera: " + computer2);

retroComputers();