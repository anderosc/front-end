// .filter() - creates a new array by filtering out elements

// filters out true values, if false values are needed --> turn 
// upside down it/them

//FIRST EXAMPLE
let numbers = [1,2,3,4,5,6,7,8,9];

let eveNums = numbers.filter(isOdd);


function isEven(element){ //<-- function tests its value
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

console.log(eveNums);


//SECOND EXAMPLE

const ages = [16, 17, 18, 18, 19, 20, 21, 50, 60]

const adults = ages.filter(isAdult);

function isAdult(element){
    return element >= 18;
}

console.log(adults)



// 3RD EXAMPLE

const words = ["apple", "orange", "bana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);

function getShortWords(element){
    return element.length <= 6;
}

console.log(shortWords)