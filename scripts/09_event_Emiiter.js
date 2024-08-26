//event emmiter is class in node.
//emmiter are the way to create costom events and can be used to triger them on an spacial events.

const file = require('fs')
const evnt = require('events')
const myemmiter = new evnt()
myemmiter.on('fileRead',(data)=>{
    console.log(data)
})
file.readFile("09_textFile.txt","UTF8",(err,data)=>{
    if(data){
        myemmiter.emit('fileRead',data)
    }else{
        console.log("err:: ",err)
    }
})