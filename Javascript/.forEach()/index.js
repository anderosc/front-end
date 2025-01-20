// forEach() -> method used to iterate over the elements of
                // of an array and apply a specified function (callback)
                // to each element

                // array.forEach(callback)
                // element, index, array are provided behind the scene

/// FIRST EXAMPLE


// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function square( element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function display(element){
//     console.log(element);
// }

///////

//SECOND EXAMPLE

// let fruits = ["apple", "orange", "banana", "coconut"];

// // cant callback another function with forEach(), bc it provides
// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function display(doesntmatterwhatTowritehere){
//     console.log(doesntmatterwhatTowritehere)
// }


/// THIR EXAMPLE

let fruits = ["apple", "orange", "banana"];

fruits.forEach(function(fruit) {
    console.log(fruit.toUpperCase()); // The action: printing fruit in uppercase
});

// If you try to get a result from forEach, it will be undefined
let result = fruits.forEach(function(fruit) {
    console.log(fruit);
});
console.log(result); // Output: undefined because new array isnt created!!!
