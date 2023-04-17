// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
// К примеру `This car has 3 doors and this is left-hand drive car`

class Cars {
    numOfDoors: number;
    steeringWheelSide: string;

    constructor( numOfDoors: number, steeringWheelSide: string) {
        this. numOfDoors =  numOfDoors;
        this.steeringWheelSide = steeringWheelSide;
    }
    getCarInfo() {
        return `This car has ${this.numOfDoors} doors and this is a ${this.steeringWheelSide} drive car.`
    }
}

const car1 = new Cars(6,'right-hand').getCarInfo()
console.log(car1)

const car2 = new Cars(4,'left-hand').getCarInfo()
console.log(car2)