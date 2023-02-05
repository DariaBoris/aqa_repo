//Advanced
//Task 2
// Написать программу, которая будет выводить в консоль лесенку.
// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```
// Не забудьте вопспользоваться циклами

//Option 1
let pyramid: string = '';
const heightOfPyramid: number = 6;            // будет 6 строк

for (let i = 1; i <= heightOfPyramid; i++) { //формируем строки пирамиды

    for (let j = 0; j < i; j++) {            // формируем решетки в строке
        pyramid += '#';
    }
    pyramid += '\n';                         //перенос на новую строку
}

console.log(pyramid);

//Option 2
for (let i = 1; i <= 6; i++) {
    console.log('#'.repeat(i))
}