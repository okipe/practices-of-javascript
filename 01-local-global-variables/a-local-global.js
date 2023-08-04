        var computer1 = 'IBM PC';
        var computer2 = 'IBM XT';
        var computer3 = 'IBM AT';
        let computer4 = 'Apple Macintosh 128K';
        let computer5 = 'Apple Macintosh 512K';
        let computer6 = 'Apple Macintosh Plus';
        const computer7 = 'Commodore 64';
        const computer8 = 'Commodore 128';
        const computer9 = 'Amiga 1000';

function retroComputers() {
    var computer1 = 'ZX Spectrum';
    var computer2 = 'Sinclair QL';

    console.log(computer1);
    console.log(computer4); 
    console.log(computer7); 

    console.log(computer2);
    console.log(computer5); // let does not work.
    console.log(computer8); // const does not work.
}

console.log("Afuera: " + computer1);
console.log("Afuera: " + computer2);

retroComputers();