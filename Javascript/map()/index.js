// .map() -> accepts a callback and applies that function to each 
//          element of an array, then return 

// The map method receives a function as a parameter. 
// Then it applies it on each element and returns an 
// entirely new array populated with the results of 
// calling the provided function.

//FIRST EXAMPLE

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// function square(element){
//     return Math.pow(element, 2);
// }

// console.log(squares);

///////
//SECOND EXAMPLE
const students = ["Spongebob", "Patric", "Squidward", "Sandy"];
const studentsUpper= students.map(upperCase);

// elemen will be provided with .map
function upperCase(element){
    return element.toUpperCase();
}

console.log(studentsUpper)


