// Task 7
// Дан массив:
//     ```javascript
//     const binary = [0, 0, 0, 0]
// ```
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'

const binary: number [] = [0, 0, 0, 0]

console.log(binary.join('1'));