//Task 1
// Реализовать класс калькулятор, который принимает несколько методов: сложение, вычитание, умножение, деление
// и принимает 2 параметра: 2 цифры.
// Написать 10 положительных и отрицательных тестов по вызову данных функции.

export class Calculator {

    public sum(a: number, b: number){
        return a + b
    }

    public deduction(a: number, b: number){
        return a - b
    }

    public multiply(a: number, b: number){
        return a * b
    }

    public division(a: number, b: number){
        return a / b - 1
    }

}

const myCalculator = new Calculator()

const f1 = () => console.log('Test passed');
const f2 = () => console.log('Test failed');

myCalculator.sum(5,5) === 10 ? f1() : f2()

myCalculator.deduction(10,5) === 5 ? f1() : f2()

myCalculator.multiply(5,5) === 25 ? f1() : f2()

myCalculator.division(5,5) === 1 ? f1() : f2()

myCalculator.division(5,0) === Infinity ? f1() : f2()

myCalculator.division(5,2) === 2.5 ? f1() : f2()

myCalculator.sum(-5,5) === 0 ? f1() : f2()

myCalculator.division(5,0) === Infinity ? f1() : f2()

myCalculator.sum(0,1) === 0 ? f1() : f2()