//Task 7
// Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции

function calcFact(n: number): number {
    return ((n != 1) ? n * calcFact(n - 1) : 1) // число, умноженное на "себя минус один" , затем на "себя минус два" , и так далее до 1
}

console.log(calcFact(5))

// ((myName: string) => console.log(`Hello I am ${myName}`))('Daria') // вызывается сразу