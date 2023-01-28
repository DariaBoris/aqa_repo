//Task 3
// ```javascript
//     let count = 42
//     let userName = '42'
// ```
// Создайте две переменные.
// Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.

let count: number = 42;
let userName: string = '42';

console.log(typeof String(count));
console.log(typeof `${count}`);

console.log(typeof Number(userName));
console.log(typeof +userName);