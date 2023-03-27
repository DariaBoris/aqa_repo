// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

const human1: {name: string} = {
    name: 'Vasya',
};

const human2: {name: string} = {
    name: 'Petya',
};

function sayMyName(this: {name: string}) {
    console.log(`My name is ${this.name}.`);
}

sayMyName.call(human1)
sayMyName.call(human2)