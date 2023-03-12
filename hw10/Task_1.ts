// Task 1
// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
// Конструкт родительского класса принимает переменные марку авто и тип двигателя.
// Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
// Выводящий текст должен быть таким:
// `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`.
// (В задании используйте не только public модификатор, где это возможно)

class Car {
    brand: string;
    engine: string;
    speed: number;
    price: number;

    constructor(brand: string, engine: string, speed: number, price: number) {
        this.brand = brand;
        this.engine = engine;
        this.speed = speed;
        this.price = price;
    }

    showCarInfo(){
        return `This is ${this.brand}. It has ${this.engine} engine and max speed equal to ${this.speed}. Approximate cost of the car is ${this.price}.`
    }
}

class SportCar extends Car {
    constructor(brand: string, engine: string, speed: number, price: number) {
        super (brand, engine, speed, price)
    }
}

const ferrari = new SportCar('ferrari', 'F140FE', 350, 300000).showCarInfo()
console.log(ferrari)

class LuxuryCar extends Car {
    constructor(brand: string, engine: string, speed: number, price: number) {
        super (brand, engine, speed, price)
    }
}

const mercedes = new LuxuryCar('mercedes', 'OM613', 200, 100000).showCarInfo()
console.log(mercedes)