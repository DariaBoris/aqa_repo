// Task 2
// Создать любой обьект с двумя ключами и любыми значениями в них,
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const myCat = {
    age: 10,
    size: 'big'
}

console.log('size' in myCat);