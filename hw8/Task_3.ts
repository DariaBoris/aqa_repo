// Task 3
// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
//     ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers: number[] = [7, -4, 32, -90, 54, 32, -21]

const newNumbers: number[] = numbers.filter( function (value: number) {
    return value >= 0;
})
console.log(newNumbers)

const new_Numbers: number [] = numbers.filter((value: number) => value >= 0);

console.log(new_Numbers)