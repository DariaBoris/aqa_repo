//Task 1
// Пользователь передает через переменную свою фамилию и имя.
// Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр

const myNameSurname: string = 'Daria Boris ';

console.log(`Hey ${myNameSurname.toUpperCase()}`.repeat(5));
console.log(`Hey ${myNameSurname.toLowerCase()}`.repeat(5));
