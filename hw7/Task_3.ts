// Task 3
// Дан массив:
//     ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```
// Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers: number [] = [5, 43, 63, 23, 90]
numbers.splice(0, numbers.length)
console.log(numbers)