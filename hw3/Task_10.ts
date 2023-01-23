//Task 10
const key: boolean = true;
const documents: boolean = true;
const pen: boolean = true;
const apple: boolean = false;
const orange: boolean = true;
const shouldGoToWork: string = 'You can go to work';
const shouldNotGoToWork: string = 'You cannot go to work';

if (key && documents && pen && apple || orange){   //если apple && orange то все равно 'You can go to work
    console.log(shouldGoToWork)
} else {
    console.log(shouldNotGoToWork)
}