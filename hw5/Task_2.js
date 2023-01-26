"use strict";
//Task 2
let sumOfCredit = 1000;
let percent = 0.17;
let years = 5;
function credit(sumOfCreditOverPay) {
    sumOfCreditOverPay = sumOfCredit - (sumOfCredit * percent) * years;
    return sumOfCreditOverPay;
}
// credit(1000);                           // почему можно не вызывать?
console.log(credit(1000));
