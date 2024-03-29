// Task 4
// Используя метод **`reduce`** получите сумму всех чисел массива.
//     ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const newFibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const sumResult: number = newFibonacci.reduce((accum: number, value: number) => {
    accum += value;
    return accum
}, 0);                                  // 0 здесь initial value присваивается accum для первой итерации, далее не используется

console.log(sumResult)