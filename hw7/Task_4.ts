// Task 4
// Дан массив:
//     ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students: string [] = ['Polina', 'Dasha', 'Masha']

students.pop()                     // удалили Masha

students.push('Borya')             // Добавили Borya

console.log(students.shift())      // удалили Polina

students.unshift('Andrey')
console.log(students)              // Добавили Andrey