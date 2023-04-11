// Task 1
// Создайте класс Animal, в конструктор которого передается имя,
// и с помощью метода данного класса можно вывести фразу `This is a <animalType>. It's name is <name>`.
// Так же данный класс должен иметь статическое поле animalType,
// значение которого должно подставляться в фразу, которую выводит метод выше.

class Animal {
    static animalType: string = 'frog';
    name: string;

    constructor(animalType: string, name: string) {
        this.name = name;
    }
    showPhrase() {
        return `This is a ${Animal.animalType}. It's name is ${this.name}.`
    }
}

const frog1 = new Animal(Animal.animalType, 'Froggy').showPhrase()
console.log(frog1)

const frog2 = new Animal(Animal.animalType, 'Franny').showPhrase()
console.log(frog2)