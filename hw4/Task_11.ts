//Task 11
// Дано произвольное число.
// Реализовать метод возводящий число в степень. Степень возведения указывается как параметр к методу.

function myFunction11(Num: number, powNum: number): number {
    console.log((Math.pow(Num, powNum)))
    return (Math.pow(Num, powNum));
}

myFunction11(3, 3)