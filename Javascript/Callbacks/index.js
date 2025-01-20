// callback - a function that is passed as an 
// argument to another function.
// used to handle asynchronous operations:
//1. reading a file
//2. network requests
//3. interacting with databases
// "Hey, when you are done, call this next"

// hello(goodBye); // -> revoke the function
// goodBye();

hello(wait); // -> revoke the function
// ---> function in () will be excecuted next after first one is done

// function hello(callback){
//     setTimeout(function(){  // setTimeout - wait 3 sec
//         console.log("Hello!");
//         callback();
//     }, 3000);
// }

function hello(callback){
        console.log("Hello!");
        callback();
}

function wait(){
    console.log("wait")
}

function leave(){
    console.log("Leave!")
}

function goodBye(){
    console.log("Good Bye!");
}

// SECOND EXAMPLE

sum(displayPage, 1, 2);
function sum(callback, x,y){
    let result = x +y;
    callback(result);
    
}

function display(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}