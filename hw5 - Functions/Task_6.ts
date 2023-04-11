//Task 6
// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function foo(): void {
    console.log("foo");
}

function boo(): void {
    console.log("boo");
}

function fooboo(myBool: boolean, f1: () => void, f2: () => void): void {
    if (myBool === true) {
        f1();
    } else {
        f2();
    }
}

fooboo(false, foo, boo);
fooboo(true, foo, boo);