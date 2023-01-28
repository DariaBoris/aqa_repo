//Task 14
// Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день.
// Текущее время часы:минуты:секунды.".
// Использовать только внутренние методы Date.

const date: Date = new Date();
console.log('текущая дата: ' + date.toLocaleDateString()); // как вывести месяц/год/день?

const time: Date = new Date();
console.log('текущее время: ' + date.toLocaleTimeString());


const myDate: Date = new Date();
const [month, year, day] = [myDate.getMonth(), myDate.getFullYear(), myDate.getDate()];

console.log(myDate) // как вывести месяц/год/день без времени?