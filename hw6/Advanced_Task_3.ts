// Advanced
// Task 3
// Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте,
// это же поле не меняется во втором объекте. Объекты должны быть описаны с помощью типа или интерфейса

type typeDogs = {
    name: string,
    age: number,
}

const dog: typeDogs = {
    name: 'Енчик',
    age: 3,
};

// const dog2 = Object.assign({}, dog);           // способ 1
const dog2 = JSON.parse (JSON.stringify(dog))    // способ 2

dog.age = 7;
dog2.age = 5;

console.log(dog)
console.log(dog2)