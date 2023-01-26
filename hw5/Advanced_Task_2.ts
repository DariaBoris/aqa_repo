//Task 2
let amountOfBreaks: number;

function choco (chocoLength: number, chocoWidth: number) {
    if (chocoLength <= 0 && chocoWidth <= 0){
        console.log('Cannot break')
    } else {
        amountOfBreaks = (chocoWidth * chocoLength) - 1
        return amountOfBreaks
    }
}

console.log(choco(0,0))