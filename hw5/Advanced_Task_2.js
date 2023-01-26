"use strict";
//Task 2
let amountOfBreaks;
function choco(chocoLength, chocoWidth) {
    if (chocoLength <= 0 && chocoWidth <= 0) {
        console.log('Cannot break');
    }
    else {
        amountOfBreaks = (chocoWidth * chocoLength) - 1;
        return amountOfBreaks;
    }
}
console.log(choco(0, 0));
