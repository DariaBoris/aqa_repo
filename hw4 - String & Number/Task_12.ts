//Task 12
// Реализовать метод получения рандомного целочисленного числа в заданном диапазоне.
// Диапазон задается аргументами фунции

function myFunction12(min: number, max: number): number {
    console.log(Math.floor(Math.random() * (max - min)) + min)
    return (Math.floor(Math.random() * (max - min)) + min);
}

myFunction12(5, 10);

// Math.floor - округляет до целого
// Math.random - задает диапазон [0, 1)
// const wtf = (0.33 * (30 - 5) + 5);
// console.log(Math.floor(wtf))