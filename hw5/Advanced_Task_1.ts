// Task 1
// У треугольника сумма любых двух сторон должна быть больше третьей.
function triangle (a: number, b: number, c: number) {
    if (b + c > a && a + c > b && a +b > c) {
        return true
    }
    else {
        return false
    }
}
console.log(triangle(1, 2, 3))