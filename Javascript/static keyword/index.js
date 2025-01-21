// static = a keyword that defines properties or methods that belong to a class itself 
            // rather than the obects created from that class (class owns aything static,
            // not the objects)


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2
    }
    static getCircumference(radius){
        return 2 * this.PI * radius
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))



////

class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`hELLO ${this.userName}`)
    }
}

const user1 = new User("Spongbob");
const user2 = new User("Patric");
const user3 = new User("Sandy");



console.log(user1.userName);
console.log(User.getUserCount());

user1.sayHello()

