//Task 12
const min: number = Math.floor(5);
const max: number = Math.floor(30);
const result: number = Math.floor(Math.random() * (max - min)) + min;

console.log(result);

// Math.floor - округляет до целого
// Math.random - задает диапазон [0, 1)
// const wtf = (0.33 * (30 - 5) + 5);
// console.log(Math.floor(wtf))