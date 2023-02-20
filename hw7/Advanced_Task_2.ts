// Advanced
// Task 2
// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix: number [] [] = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
]

// @ts-ignore
let joinedMatrix: number [] = [].concat(matrix[0], matrix[1], matrix[2], matrix[3]) // как убрать ошибку?
console.log(joinedMatrix);

let sum: number = 0;

for (let i = 0; i < joinedMatrix.length; i++) {
    sum += joinedMatrix[i];
}
console.log(sum / joinedMatrix.length)