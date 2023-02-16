//Task 7
// Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции

// Variant 1

// function calcFact(n: number): number {
//     return ((n != 1) ? n * calcFact(n - 1) : 1) // число, умноженное на "себя минус один" , затем на "себя минус два" , и так далее до 1
// }
//
// console.log(calcFact(5))

// Variant 2

(function calcFact2 (n2: number) {
    for (let i = n2 - 1; i >= 1; i--) {
        n2 = n2 * i;
    }
    console.log(n2)
} (5));