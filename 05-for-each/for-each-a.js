const browsers = ['Internet Explorer', 'Netscape Navigator', 'NCSA Mosaic'];

for (let index = 0; index < browsers.length; index++) {
    const item = browsers[index];
    console.log('> ' + item + '( for)');
}

browsers.forEach(element => {
    console.log('- ' + element + '( forEach)');
});