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

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andy: 664,
    alexandra: 199
}


let sum = 0;

for (const salariesKey in salaries) {
    // @ts-ignore
    sum = salaries[salariesKey] + sum
}

let meduimSalary = sum / Object.keys(salaries).length;
console.log(meduimSalary)