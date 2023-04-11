// Task 5
// Дан обьект:
//     ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries: { sveta: number; alexandra: number; andrey: number; anton: number; andy: number } = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andy: 664,
    alexandra: 199
}


let sum: number = 0;

for (const salariesKey in salaries) {
    sum = salaries[salariesKey as keyof {sveta: number; alexandra: number; andrey: number; anton: number; andy: number}] + sum // почему так?? иначе ошибка
}

let meduimSalary = sum / Object.keys(salaries).length;
console.log(meduimSalary)