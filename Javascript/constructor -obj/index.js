// constructor = a special method for defining the properties and methods of objects

function Car(make, model, year, color){
    this.make =  make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Yellow");
const car2 = new Car("Vw" , "Camero", 1993, "Blue");
const car3 = new Car ("TEST", "true", "test", "t")

console.log(car1)
console.log(car1.model)
console.log(car2)
console.log(car3)
car1.drive();