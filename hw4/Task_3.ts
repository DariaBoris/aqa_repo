//Task 3
// Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке.
// Если переданное число больше длины строки, то должно отобразиться сообщение:
// `Вы вышли за границу строки`

function checkStringLength(sentence: string): string {
    if (sentence.length > 5) {
        console.log('Вы вышли за границу строки.')
    }
    return (sentence)
}

checkStringLength('I love my cat.')


