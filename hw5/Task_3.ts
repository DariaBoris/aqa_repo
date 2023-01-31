//Task 3
// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

let myString4: string = 'I love my cat';

function trimString(from:number, till:number) {
    return myString4.substring(from, till);
}

console.log(trimString(2, 6))