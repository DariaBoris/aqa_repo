//Task 4
// Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет.
// Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет,
// то `В конце предложения не хватает точки`

function myFunction4(cat1: string): string {
    if (cat1.endsWith('.')) {
        console.log('Данное предложение закончено')
    } else {
        console.log('В конце предложения не хватате точки')
    }
    return (cat1)
}

myFunction4('I love my cat.')