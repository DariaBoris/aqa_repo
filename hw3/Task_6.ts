//Task 6
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
//     `Variable: %variable_name% have type: %type_variable%`

const myName: string = 'Daria';
const myBirthYear: number = 1991;
const myBoolean: boolean = true;

console.log('Variable: ' + myName + ' has type: ' + typeof myName);
console.log('Variable: ' + myBirthYear + ' has type: ' + typeof myBirthYear);
console.log('Variable: ' + myBoolean + ' has type: ' + typeof myBoolean);