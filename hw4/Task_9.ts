//Task 9
// Дано произвольное число.
// Реализовать метод проверяющий является ли это число целочисленным или нет.
// Если является - вывести его, если нет - округлить до целой части.

let myNumber1: number = 100.5290857209857;

if (Number.isInteger(myNumber1)) {
    console.log(myNumber1)
} else {
    console.log(Math.ceil(myNumber1))
}