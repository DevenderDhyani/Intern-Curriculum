function tryCat(){
    try{
        console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined

    }catch(err){
        if(err instanceof ReferenceError){
            console.log("************* Reference Error *****************")
            console.error(err)
        }
    }finally{
        console.log("It will work forever")
    }
}
function trycat2(){
    console.log("------------This is second function output-------------")
}
tryCat()
trycat2()

//creating a costum error
class testError extends Error {
    constructor(massage){
        super(massage)
        this.name = "MyCustomError_Reference" 
    }
}