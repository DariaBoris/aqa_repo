//Task 1
// Реализовать класс калькулятор, который принимает несколько методов: сложение, вычитание, умножение, деление
// и принимает 2 параметра: 2 цифры.
// Написать 10 положительных и отрицательных тестов по вызову данных функции.

class Calculator {

    constructor(){}

    sum(a: number, b: number){
        return a + b
    }

    deduction(a: number, b: number){
        return a - b
    }

    multiply(a: number, b: number){
        return a * b
    }

    division(a: number, b: number){
        return a / b
    }

}

const myCalculator = new Calculator()

const testSum = myCalculator.sum(5,5) === 10 ? 'Test passed' : 'Test failed'
console.log(testSum)

const testDed = myCalculator.deduction(10,5) === 5 ? 'Test passed' : 'Test failed'
console.log(testDed)

const testMult= myCalculator.multiply(5,5) === 25 ? 'Test passed' : 'Test failed'
console.log(testMult)

const testDiv= myCalculator.division(5,5) === 1 ? 'Test passed' : 'Test failed'
console.log(testDiv)

const testDivByZero = myCalculator.division(5,0) === Infinity ? 'Test passed' : 'Test failed'
console.log(testDivByZero)

const testDivFractions = myCalculator.division(5,2) === 2.5 ? 'Test passed' : 'Test failed'
console.log(testDivFractions)

const testSumNegativeFigure = myCalculator.sum(-5,5) === 0 ? 'Test passed' : 'Test failed'
console.log(testSumNegativeFigure)