"use strict";
// Task_1
let sum = 0;
function getSum(myNum) {
    for (let i = 0; i <= myNum; i++) {
        sum += i; // sum = sum + i
    }
    return sum;
}
console.log(getSum(100));
