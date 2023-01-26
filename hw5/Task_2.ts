//Task 2
let sumOfCredit: number = 1000;
let percent: number = 0.17;
let years: number = 5;

function credit (sumOfCreditOverPay:number) {
    sumOfCreditOverPay = sumOfCredit - (sumOfCredit * percent) * years
    return sumOfCreditOverPay
}
// credit(1000);                           // почему можно не вызывать?
console.log(credit(1000))