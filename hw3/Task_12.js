"use strict";
//Task 12
let myAge = 17;
if (myAge >= 18) {
    console.log('Попей пивка');
}
else if (myAge >= 16 && myAge < 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
    console.log('Пей колу');
}
else {
    console.log('Пей колу');
}
// Почему не срабатывает в др порядке?
// if (myAge >= 18) {
//     console.log ('Попей пивка')
// } else if (myAge < 18) {
//     console.log ('Пей колу')
// } else if (myAge >= 16 && myAge < 18) {
//     console.log('Можешь выкурить сигаретку, только маме не говори') // не доходит до этого цикла
// }
