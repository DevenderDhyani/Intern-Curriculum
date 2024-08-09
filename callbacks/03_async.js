function func1(){
    return new Promise((res,rej)=>{
        console.log("working..")
        res()
        setTimeout(() => {
            console.log()
        }, 3000);
    })
}
async function testingAsync(){
   await func1()
   await func1()

}
testingAsync()