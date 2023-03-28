// Task
// Provide examples applying OOP principles

// Encapsulation

class Family {

    name: string;
    private readonly familyName: string;
    age: number;

    constructor(name: string, familyName: string, age: number) {
        this.name = name;
        this.familyName = familyName;
        this.age = age;
    }

    showFamilyInfo() {
        return `This is ${this.name} ${this.familyName}. He or she is ${this.age} years old.`
    }

    sayHi() {
        return `Hey hey ${this.name}!`
    }

}

const father = new Family('Bob', 'Brown', 45).showFamilyInfo()
console.log(father)

const mother = new Family('Mary', 'Brown', 40).showFamilyInfo()
console.log(mother)

// Inheritance

class Children extends Family{
    adult: boolean;

    constructor(name: string, familyName: string, age: number, adult: boolean) {
    super(name, familyName, age);
    this.adult = adult;
    }
}
const daughter = new Children('Sarah', 'Brown', 18, true).showFamilyInfo()
console.log(daughter)

// Polymorphism

const granny = new Family(`Dora`, `Brown`, 70).sayHi()
console.log(granny)

const son = new Family('Tom', 'Brown', 5).sayHi()
console.log(son)

// const daughter = new Children('Sarah', 'Brown', 18, true).sayHi()
// console.log(daughter)


