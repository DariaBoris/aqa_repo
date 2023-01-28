//Task 5
// Написать функцию **`getSum`** которая принимает два целых числа a и b,
// которые могут быть положительными или отрицательными, найти сумму всех чисел между ними,
// включая их, и вернуть ее. Если два числа равны, верните a или b.
//```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// ```

function getSum1 (aa: number, bb: number) {
    if (aa != bb) {
       return aa + bb
    } else if (aa === bb) {
        return aa || bb
    }
}

console.log(getSum1(100,1));