// Task 6
// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// Реализуйте оба варианта, когда результирущее значение true или false

const num: number [] = [1, 3, 15, 20, 25];

const resTrue: boolean = num.some((value: number) => {
    return value % 3 === 0 && value % 5 === 0;
})

console.log(resTrue)

const resFalse: boolean = num.some((value: number) => value % 17 === 0 || value % 9 === 0)

console.log(resFalse)