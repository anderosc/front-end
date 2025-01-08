// let fullName = "gimmii";

// document.getElementById("p1").textContent = `Your name is ${fullName}`

// let students = 30;

// // students += 2;
// // students -= 1;
// // students *=2;
// // students **=2;
// students++;

// console.log(students)

// let result = 1+ 3 **2 -5/2;
// console.log(result);

// let username;


// username = window.prompt("What your username?");

// console.log(username);
// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value ;
//     document.getElementById("myH1").textContent = `hELLO ${username}`;
// }

// let age = window.prompt("How old are you?");

// age +=1

// console.log(age,typeof age)

// let x = "Pixxa"
// let y = "pIZZA"
// let z = "Pizza"

// x = Number(x);

// console.log(x, typeof x)

// const PI = 3.14159;
// let radius;
// let circumference;



// radius = window.prompt("Enter radius of a circle")

// radius = Number(radius);
// circumference = 2* pi * radius;

// console.log(circumference)


// let x = 3;
// let y = 2;
// let z = 4;

// // z = Math.ceil(x);
// // z = Math.floor(x); rouns down always
// //z = Math.ceil(x); 
// // z = Math.ceil(x); rounds always up
// // z = Math.trunc(x); elimantes descmal portions
//  let max = Math.max(x, y, z);
// console.log(max);

// //////
// let min = document.getElementById("enterMin");
// let max = document.getElementById("enterMax");
// let buttonn = document.getElementById("button");
// let answer = document.getElementById("answer");
// let randomNum


// document.getElementById("button").onclick = function() {
//     mn = Number(min.value);
//     mx = Number(max.value);
//     result = Math.floor(Math.random()* mx) + mn
//     answer.textContent = result;

// }

// let age = 300;

// if(age >= 18 ){
//     console.log("You old enought to drive");
// } 
// else if(age < 0){
//     console.log("no")
// } 
// else if(age > 100){
//     console.log("old")
// }      
// else{
//     console.log("YOU AREnt")

// }

// ternary operator = a shortcut to if and ese statements
// condititon ? codeIftrue : if false

// let = age = 30;

// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message)

// let time = 16;
// let greeting = time > 12 ? "Moring" : "Good afternoon"
// console.log(greeting)

// let day = ;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("No day")
// }

// let testScore = 71;
// let letterGrade;

// switch(true){
//     case testScore >=90:
//     letterGrade = "A"
//     break;
//     case testScore >=80:
//         letterGrade ="B"
//         break;
//     case testScore >=70:
//         letterGrade = "C"
//         break
//     default:
//         letterGrade = "F"
// }
// console.log(letterGrade)


// let userName = "   Test   ";
// let result = userName.startsWith(" ")

// result === true ? userName = userName.trim()  : undefined;
// console.log(userName)

// const fullName = "Mari Matt"

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") +1 , fullName.length )

// console.log(firstName)
// console.log(lastName)



// //Method chaining - calling one method after another in one continuous line of code

// //  --- NO METHOD CHAINING ---

//     let userName = window.prompt("Enter your username");

//     // userName = userName.trim();
//     // let letter = userName.charAt(0);
//     // letter = letter.toUpperCase();

//     // let extraChars = userName.slice(1)
//     // extraChars = extraChars.toLowerCase();

//     // userName = letter + extraChars;
//     // console.log(userName);

// /// --- METHOD CAHINING
// userName= userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);



// logicalo peratos
// AND = &&    OR = ||     NOT = !
// const temp = 32

// if(temp > 0 && temp < 30){
//     console.log("Wheater is good")
// }
// else {
//     console.log("Wheater is b")

// }
// const isSunny = false;

// if(!isSunny){
//     console.log(isSunny)
// }
// else{
//     console.log("idk")
// }


//
// = assignment operator
// == comparsion operator(compare if values are equal)
// ===strict equality operator(compare if values and datatpes are equal)
// !=inequality operator (("is this NOT EQUAL to that"))
// !== strict inequality operator


// const PI = 3.12;
// if(PI !== 3.12){
//     console.log("nah")
// }
// else{
//     console.log("truee")
// }



//while loop - reapeat some code while condition is true
let username = "";
while(username === ""){
    username = window.prompt("Enter username");
}
console.log(`you are ${username}`)



