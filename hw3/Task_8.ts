//Task 8
// Даны две переменные:
// ``` javascript
//     let height = 15
//     let width = 20
// ```
// С помощью условий выведите в консоль разработчика наибольшее число.

let height: number = 15;
let width: number = 15;

if (height > width) {
    console.log(height);
} else if (height < width){
    console.log(width);
} else {
    console.log('Числа равны')
}