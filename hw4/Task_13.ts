//Task 13
// Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне.
// Диапазон задается аргументами фунции

const min1: number = Math.floor(5);
const max1: number = Math.floor(30);
const result1: number = (Math.random() * (max1 - min1)) + min1;

console.log(result1);

// убрали Math.floor - округляет до целого