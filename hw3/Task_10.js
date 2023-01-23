"use strict";
//Task 10
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = 'You can go to work';
const shouldNotGoToWork = 'You cannot go to work';
if (key && documents && pen && apple || orange) {
    console.log(shouldGoToWork);
}
else {
    console.log(shouldNotGoToWork);
}
