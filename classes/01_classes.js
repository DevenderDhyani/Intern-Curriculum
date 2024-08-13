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
z
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