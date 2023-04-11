//Task 1
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

const cat = {
    name: 'Boosya',
    color: 'grey'
};

// @ts-ignore
delete cat["color"] // взяла color в [""], и @ts-ignore появился сам
console.log(cat)