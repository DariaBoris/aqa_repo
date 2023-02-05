//Task 9
// Дано произвольное число.
// Реализовать метод проверяющий является ли это число целочисленным или нет.
// Если является - вывести его, если нет - округлить до целой части.

function myFunction9(myNumber1: number): number {
    if (Number.isInteger(myNumber1)) {
        console.log(myNumber1)
    } else {
        console.log(Math.ceil(myNumber1))
    }
    return (myNumber1)
}

myFunction9(100.9999)