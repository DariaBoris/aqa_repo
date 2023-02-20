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

function compareObj(equalOrNot: boolean, student1: any, student2: any): boolean {
    if (JSON.stringify(student1) === JSON.stringify(student2)) {
        console.log(equalOrNot = true)
    } else {
        console.log(equalOrNot = false)
    }
    return(equalOrNot)
}

compareObj(true, student1, student2)