function test(){
    return new Promise((res,rej)=>{
        console.log("printing")
        setTimeout(() => {
            console.log("printed")
            // res("successfully resolved...")
            rej("drastically rejected!")
        }, 2000);
    })
}
async function asyncErrorTest(){
    try{
        const test1 = await test();
    }catch(err){
        console.log(err)
    }
    
    setTimeout(()=>{
        for(let i=1;i>=0;i++){
            console.log(i)
        }
    },1000)
}
asyncErrorTest()