//Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
//  количество лет — 5.
//  Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

let sumOfCredit: number = 1000;
let percent: number = 0.17;
let years: number = 5;

function credit (sumOfCreditOverPay:number) {
    sumOfCreditOverPay = sumOfCredit - (sumOfCredit * percent) * years
    return sumOfCreditOverPay
}
// credit(1000);                           // почему можно не вызывать?
console.log(credit(1000))