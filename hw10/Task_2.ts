// Task 2
// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`.
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

class Human {
    name: string

    constructor(name: string) {
        this.name = name;
    }
    sayMyName() {
        return `My name is ${this.name}.`
    }
}

const human1 = new Human('Petya').sayMyName()
console.log(human1)

const human2 = new Human('Vasya').sayMyName()
console.log(human2)