// Task 3
// Дан массив:
//     ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```
// Удалите все элементы в массиве и выведите в консоль полученный результат.

const numToDelete: number [] = [5, 43, 63, 23, 90]
numToDelete.splice(0, numToDelete.length)
console.log(numToDelete)