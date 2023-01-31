//Task 6
// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function fooBoo (myBool: boolean): boolean {
    if (myBool = true) {
        console.log('Foo')  // It always returns 'Foo', whyyy? It throws a warning: 'myBool = true' used as condition.
    } else {
        console.log('Boo')
    }
    return(myBool)
}

console.log(fooBoo(false))