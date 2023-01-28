//Task 3
// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

let myString4: string = 'I love my cat';
let from: number = 2;
let till: number = 6;

function trimString (trimFrom: number, trimTill: number) {
    myString4.substring(from, till)
    return myString4.substring(from, till);
}
// trimString(from,till)           // почему можно не вызывать?
console.log(trimString(from,till))