// let fruits = ["apple", "banana", "orange", "ananas"];

// fruits[3] = "coconut"
// fruits.pop();
// fruits.unshift("mango")  - add element to beginning
// fruits.shift()  - remove first element

// fruits.push("cconut")
// console.log(fruits);
// console.log(fruits);
// let numOfFruits = fruits.length
// let index = fruits.indexOf("mango")  - find the element ( if not found it returns -1)
// console.log(index)

// for(let i = 0; i< fruits.length; i+=2){
//     console.log(fruits[i])
// }

// for(let i = fruits.length -1; i>= 0; i--){
//     console.log(fruits[i])
// }

// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit)
// }

// let numbers = [13,2,3,4,5]
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// let numbers2 = numbers.join("");
// console.log(numbers2)

// let username = "My username";
// let letters = [...username].join("");
// console.log(letters);

// let fruits = ["apple", "banana", "orange", "ananas"];
// let vegetables = ["carrot", "celery", "potatos"]
// let newFruits = [...fruits, ...vegetables, "eggs", "milk"]
// console.log(newFruits)

// const food1 = "pizza"
// const food2 = "hamburger"
// const food3 = "hodtdog"
// const food4 = "sushi"

// function openFridge(...foods){
//     console.log(foods)
// }

// function getFood(...foods){
//     return foods;
// }

// // openFridge(food1, food2, food3, food4);
// const foods = getFood(food1, food2, food3, food4)
// console.log(foods)

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number
//     }
//     return result;
// }
// // const total = sum(1, 2, 3, 4,5,6)
// // console.log(total)

// // function getAverage(...numbers){
// //     let result = 0;
// //     for(let number of numbers){
// //         result += number
// //     }
// //     return result/ numbers.length;
// // }

// // const total = getAverage(75,100, 85, 3, 60)
// // console.log(total)

// const name = ["Mr", "SpongBob", "Squarepants", "III"]
// const fullName =combineString(...name)

// function combineString(...strings){
//     return strings.join(" ")
// }
// console.log(fullName)