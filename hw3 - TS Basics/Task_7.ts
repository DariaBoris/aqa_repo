//Task 7
// Создайте переменные и присвойте им значения:
// ``` javascript
//     'true'
//     false
//     17
//     undefined
//     null
// ```
// Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

const one: string = 'true';
const two: boolean = false;
const three: number = 17;
const four: undefined = undefined;
const five: null = null; //почему object?

console.log(typeof one + ', ' + typeof two + ', ' + typeof three + ', ' + typeof four + ', ' + typeof five);