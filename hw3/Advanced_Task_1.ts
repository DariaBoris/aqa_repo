//Advanced
// Task 1
// Поменяйте значение переменных местами не создавая дополнительной переменной:

let a: number = 4;
let b: number = 3;

a = [b][b = a, 0]; //https://stackoverflow.com/questions/9864420/how-does-bb-a-0-swap-between-a-and-b
console.log(a, b)