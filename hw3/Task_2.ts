//Task 2
// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
//
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

const secInMin: number = 60;
const minInHour: number = 60;
const hourInDay: number = 24;
const dayInYear: number = 365;
const myAge1: number = 31;
const myAgeInSeconds = secInMin * minInHour * hourInDay * dayInYear * myAge1

console.log(myAgeInSeconds)