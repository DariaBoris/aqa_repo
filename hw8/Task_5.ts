// Task 5
// Используя метод **`find`** найдите в массиве первое четное число.
//     ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```

const numbersArray = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const evenNumber = numbersArray.find((value: number) => {
    return value % 2 === 0;
})

console.log(evenNumber)