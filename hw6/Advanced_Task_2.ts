// Advanced
//Task 2
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27
}

let student2 = {
    name: 'Marina',
    age: 27
}

function compareObj(student1: any, student2: any): boolean {
    return (JSON.stringify(student1) === JSON.stringify(student2))
}

console.log(compareObj(student1, student2))