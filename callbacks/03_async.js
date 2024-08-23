
function func1(){
    return new Promise((res,rej)=>{
        console.log("testing")
        setTimeout(()=>{
            res("sorry some issue accurd") 
        },3000)
    })
}
async function testingAsync(){
   let x = await func1();
//    console.log(x)
   console.log("-----------------\n")
   console.log("-----------------\n")
   let y = await func1()
//    console.log(y)

    //   await func1()//printing "working" then wait for 3 sec
    //   await func1()//printing "working" then wait for 3 sec

}
testingAsync()