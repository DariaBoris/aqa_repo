//Task 2
// Дан массив:
//     ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals: string [] = ['monkey', 'dog', 'cat']

console.log(animals.slice(- 1))
console.log(animals[animals.length - 1])
console.log(animals.pop)