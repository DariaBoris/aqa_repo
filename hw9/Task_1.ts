// Task 1
// Создайте класс Animal, в конструктор которого передается имя,
// и с помощью метода данного класса можно вывести фразу `This is a <animalType>. It's name is <name>`.
// Так же данный класс должен иметь статическое поле animalType,
// значение которого должно подставляться в фразу, которую выводит метод выше.

class Animal {
    static type: string = 'frog';
    name: string;

    constructor(type: string, name: string) {
        this.name = name;
    }
    showPhrase() {
        return `This is a ${Animal.type}. It's name is ${this.name}.`
    }
}

const frog1 = new Animal(Animal.type, 'Froggy').showPhrase()
console.log(frog1)

const frog2 = new Animal(Animal.type, 'Franny').showPhrase()
console.log(frog2)