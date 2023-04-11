//Task 4
// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// > Для 2021 это будет 5.

function getSumNumbers(num4: number): number {
    let num4ToStr = num4.toString();    // переводим число в строку, чтобы получить отдельные символы
    let sum4: number = 0;
    for (let digit of num4ToStr) {
        sum4 += +digit;                // преобразуем в число
    }
    return (sum4)
}

console.log(getSumNumbers(2021))



