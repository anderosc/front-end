//  this - reference to the object where THIS is used
//     (the object depends on the immidiate context)
 //       person.name = this.nam

const person1 = {
    name : "spongebob",
    favFood : "hamburger",
    sayHello: function(){console.log(`Hi, i am ${this.name}`)}  // person1.name === this.name 
}
console.log(person1.favFood);
person1.sayHello();