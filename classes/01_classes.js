//we can create a constructor in js using conditional statements which can act a overloaded constructor.
//Javascript do not provide directoly constrctor overloading

//syntax for class
class firstClass{
    //creating a constructor
    constructor(a,b,c){
        //checking condtion if a,b,c were passed as an arguement while creating the object
        if(a && b && c){
            this.a = a
            this.b = b
            this.c = c
        }else{
            this.a = 1
            this.b = 2
            this.c = 3
        }
    }

    //creating a method for a class
    printing(){
        console.log(this.a,this.b,this.c)
    }
}

new firstClass(2,45,3).printing()


console.log("---------------2nd way to create a class---------------")
const way2Class = class test{
    constructor(a){
        if(a ){
            this.a = a
        }else{
            this.a = 1
        }
    }
    testing(){
        console.log("It is working :",this.a)
    }
}
new way2Class(123).testing()


console.log("----------------inheritance--------------------")
// class Shape {
//     constructor(){
//         console.log("parent construnctor")
//     }

//     area() {
//         // throw new Error('Method "area()" must be implemented.');
//         console.log("parent")
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super(width);
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }
// }
// // const shape1 = new Shape()
// const shape2 = new Rectangle(2,3)
// console.log(
//     shape2.area()

// )



//it is mandatory to call super in child class constructor
class Shape {
    // constructor(){
    //     console.log("parent")
    // }
    draw() {
        console.log('Drawing shape...');
    
    }
}

class Circle extends Shape {
    draw() {
        super.draw()
        console.log('Drawing a circle...');
    }
}

const circle = new Circle().draw();
