// function declaration = define areusable block of code tht performs a specific task

// THIS TIPIC IS BOUT -->  function expression = a way to define function as values or variables

const number = [1, 2, 3, 4, 5, 6];

// function square(element){   // <--- function declaration
//     return Math.pow(element, 2);
// }
const squares = number.map(function square(element){   // <--- function expression
    return Math.pow(element, 2);
});
console.log(squares)


const cubes = number.map(function cube(element){
    return Math.pow(element, 3);
})

console.log(cubes)





// arrow function = for simple functions that you use only once 
// (paramters) => some code


// const hello =function(){ <--- function
//     console.log("Hello")
// }


// const hello = (name, age) => {console.log(`Hello ${name}`)
//                          console.log(` you are ${age} years old`)}
// hello("Bro", 25);




// setTimeout(() => console.log("Hello"), 3000);





const numbers2 = [1, 2, 3, 4,5, 6];

const squares2 = numbers2.map( (element) =>  Math.pow(element, 2));

console.log(squares2);