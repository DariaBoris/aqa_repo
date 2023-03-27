// Task 3
// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
// В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах.
// К примеру `This car has 3 doors and this is left-hand drive car`

const car1 = {
    numOfDoors: 4,
    steeringWheelSide: 'left-hand',
};

const car2 = {
    numOfDoors: 6,
    steeringWheelSide: 'right-hand',
};

function giveCarInfo (this: any) {
    console.log(`This car has ${this.numOfDoors} doors and this is a ${this.steeringWheelSide} drive car.`)
}

giveCarInfo.call(car1)
giveCarInfo.call(car2)