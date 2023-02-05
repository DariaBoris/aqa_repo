//Task 5
// Дана строка 'я учу typescript!'.
// Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).

const myString1: string = 'Я учу TypeScript!';

console.log(myString1.slice(0, 6)); // Я учу

console.log(myString1.substring(6, 16)) // TypeScript!
