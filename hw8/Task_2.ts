// Task 2
// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
// в котором каждый элемент массива будет содержать строку вида:
//     > ['member 1: Darya', 'member 2: Masha', ... etc]
//
//     ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users: string [] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const newUsers: string [] = users.map(function (value: string, index: number) {
    return (`member ${index + 1}: ${value}`)
});
console.log(newUsers)

const new_Users: string [] = users.map((value: string, index: number) => (`member ${index + 1}: ${value}`));

console.log(new_Users)