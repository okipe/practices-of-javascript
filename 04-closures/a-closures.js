const myGlobal = 0;

function grandParent() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 22;
        console.log(myNumber, myGlobal, inner);

        function child() {
            const miniInner = 66;
            console.log(miniInner, inner, myNumber, myGlobal);
        }
        return child();
    }

    return parent();
}

grandParent();