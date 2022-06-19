let myString = 'Hello World';  // let is a variable that can be changed 
const myApName = 'My App';  // const is a variable that can't be changed 

// Reserved Keywords 
// const, let, var, function, this, class 

console.log('string', "string", `string${myString}`);  // string 
console.log(1, 2.7);  // number, float 
console.log(true, false);  // boolean 

// memory = { variableName: data } 

console.log(myString); 

// const myNumber = 5; 
// console.log(myNumber + 5);  // 10
// console.log(myNumber += 5);  // will show an error because const cannot be reassigned 

let myNumber = 5; 

console.log(myNumber + 5);  // 10 
console.log(myNumber);  // 5 
console.log(myNumber += 5);  // 10 
console.log('*', myNumber, '*');  // * 10 *   - because it was reassigned 
console.log('*', myNumber + '5', '*');  // * 105 *  - becasue 'string' + anything will try to make a string '5'+5 is '55' 
/*
console.log(myNumber +=  
    let myNumber: number
*/ 
// console.log('*', typeOf (myNumber + '5'), '*');  // * number5 *  
console.log('*', myNumber += '5', '*');  // 
console.log(myNumber);  // 5 

//
console.log(myNumber - 100);

score = 0;

myTitle = 'Very cool app';

// coercion // dynamic typing

console.log( 20 % 3);

console.log('Hello'.toString())

// 3 types of popups
// alert, confirm, prompt

// alert('This is a message'); // return undefined

// confirm('Are you sure?'); // return true or false

// prompt('What is your name?', 'Player 1'); // return string


Math.pow(10)

// alert();
// const day = prompt('what date');
// const myDay = new Date(day);
// console.log(myDay);