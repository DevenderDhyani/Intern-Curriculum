//callback : passing a function as an argument to use into another function 
//A callback function can run after another function has finished
//callbacks are not purely async in nature they used time related function to achieve the async behaviour of the code
function abc(xyz){
    xyz(efg)
    console.log("abc")
}
function xyz (efg){
    efg()
    console.log("xyz")
}
function efg(){
    console.log("efg")
}

abc(xyz)

// syncronous : it is the default nature of javascript in which the next line will not be execute untill 

// Asynchronous Callbacks
// Callbacks are especially important in asynchronous programming. For example, you might use a callback to handle the result of an asynchronous operation like reading a file or making a network request.



// Synchronous Operations
// Synchronous operations are those that execute sequentially, one after the other. In a synchronous process, each task must complete before the next task begins. This means that the program will wait for a task to finish before moving on to the next one.

  console.log("----------------Callback Hell---------------" )
  function callBack(num, callbackfunc){
    console.log("Called after",num,'sec')
        if(callbackfunc){
            callbackfunc()
        }
  }

  console.log("calling 1...")
  callBack(1,()=>{
    console.log("calling 2...")
    callBack(2,()=>{
        console.log("calling 3...")
        callBack(3,()=>{ 
            console.log("calling 4...")
            callBack(4)
            console.log("completed 4")
        })
        console.log("completed 3")
    })
    console.log("completed 2")
  })
  console.log("completed 1")

//althought the below function is completely same we are using only settime the output will be completely different when compared with the output of previous similar function without settimeout
  function callBackt(num, callbackfunc){
    console.log("Called after",num,'sec')
        setTimeout(()=>{
            if(callbackfunc){
                callbackfunc()
            }
        },1000)
  }

  console.log("calling 1...")
  callBackt(1,()=>{
    console.log("calling 2...")
    callBackt(2,()=>{
        console.log("calling 3...")
        callBackt(3,()=>{ 
            console.log("calling 4...")
            callBackt(4)
            console.log("completed 4")
        })
        console.log("completed 3")
    })
    console.log("completed 2")
  })
  console.log("completed 1")






  //setTimeout will take first function as a callback
//   setTimeout(()=>{
//     console.log("SetTimeOut is Working after 3 seconds")
//   },3000)
