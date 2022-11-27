const fun = (cell1, cell2, used) => {
    var possibleValues = [];
    const valids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (cell1 && cell2) {

        const sum = cell1 + cell2;
        //checking used or not
        var val = 15 - sum;

        //checking winning situation
        if (valids.includes[val] && (!used.includes(val))) {
            console.log("returned value ", val)
            possibleValues.push(val);
            return possibleValues;
        }
        for (var i = 1; i < 10; i++) {
            possibleValues.push(i);
        }
        // console.log("possibilities for both entries", possibleValues);

    }
    else if (cell1) {


        //for x+1+cell1>15
        for (var i = 15 - cell1; i < 10; i++) {
            possibleValues.push(i);
        }

        //for x+9+cell1<15

        for (var i = 15 - cell1 - 9 - 1; i >= 1; i--) {
            possibleValues.push(i);
        }

        if (valids.includes((15 - cell1) / 2)) {
            possibleValues.push(parseInt((15 - cell1) / 2));
        }
           
        used.forEach(element => {
            var val=15-element-cell1;
            if(valids.includes(val) && !used.includes(val)){
                possibleValues.push(val);
            }
        });
        // console.log("possibilities for first entry", possibleValues);

    }
    else if (cell2) {

        //for x+1+cell2>15
        for (var i = 15 - cell2; i < 10; i++) {
            possibleValues.push(i);
        }

        //for x+9+cell2<15

        for (var i = 15 - cell2 - 9 - 1; i >= 1; i--) {
            possibleValues.push(i);
        }

        if(valids.includes((15-cell2)/2)){
            possibleValues.push(parseInt((15-cell1)/2));
            console.log("possibilities for second entry", possibleValues);
        
        }

    }
    else {
        for (i = 1; i < 10; i++) { possibleValues.push(i); }
        // console.log("possibilities for no entries", possibleValues);
    }


    return possibleValues;
}


export default fun;