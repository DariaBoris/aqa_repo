//Advanced
//Task 1
// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины,
// и **false** в любом другом случае.


function triangle (a: number, b: number, c: number) {
    if (b + c > a && a + c > b && a +b > c) {
        return true
    }
    else {
        return false
    }
}
console.log(triangle(1, 2, 3))