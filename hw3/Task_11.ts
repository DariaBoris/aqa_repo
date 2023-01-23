//Task 11
let i = 15;

if (i % 5 === 0) {
    console.log('Fiz');
} else if (i % 3 === 0) {
    console.log('Buz');
} else if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizBuz');               // не выводится именно это значение
}