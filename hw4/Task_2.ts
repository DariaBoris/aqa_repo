//Task 2
// Дана строка 'я учу typescript!'.
// Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу',
// если нет - вывести строку `Данной подстроки нет`

const myString: string = 'Я учу TypeScript!';

if (myString.includes('не учу')) {
    console.log('учу');
} else {
    console.log('Данной подстроки нет')
}