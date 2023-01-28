//Task 10
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
// Для решения этой задачи нам помогут логические операторы **`|| &&`** а так же значения **true** или **false**.
// ```javascript
//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
// ```
// Исходя из условия **true** или **false** присвоить переменной **shouldGoToWork**
// текст **you can go to work** или **you can't go to work** выведите текст в консоле.

const key: boolean = true;
const documents: boolean = true;
const pen: boolean = true;
const apple: boolean = false;
const orange: boolean = true;
const shouldGoToWork: string = 'You can go to work';
const shouldNotGoToWork: string = 'You cannot go to work';

if (key && documents && pen && apple || orange) {   //если apple && orange то все равно 'You can go to work
    console.log(shouldGoToWork)
} else {
    console.log(shouldNotGoToWork)
}