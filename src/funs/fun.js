const fun= (cell1,cell2,used) => {
    var possibleValues = [];
    if (cell1 && cell2) {
        
        const sum = cell1 + cell2;
        //checking used or not
        var val = 15 - sum;

        //checking winning situation
        if (val > 0 && val < 10 && (!used.includes(val))) {
            return val;
        }
        for(var i=1;i<10;i++){
            possibleValues.push(i);
        }

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
    }
    else {
        for (i = 1; i < 10; i++)
            possibleValues.push(i);
    }

    return possibleValues;
}


export default fun;