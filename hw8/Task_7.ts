//Task 7
// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// Реализуйте оба варианта, когда результирущее значение true или false

const numb: number[] = [2, 8];    // 4*4 = 16; 1 + 6 = 7

const result: boolean = numb.every((value: number) => {
    let w = Math.pow(value, 2)
    let u = w.toString()
    let sum = 0;
    for (let digit of u) {
        sum = +digit
    }
    return (sum % 2 === 0)
})

console.log(result)