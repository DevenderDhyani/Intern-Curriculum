
//importin a module
const fs = require('fs');

//to check status wheather any value is eigther a file or a directory.
fs.stat('01_dir', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
//   console.log(stats);
  console.log('Is file:', stats.isFile());
  console.log('Is directory:', stats.isDirectory());
});


//creating a file or override to check wheather it exists or not.
fs.writeFile('01_file.txt', 'Hey universe...', 'utf8', (err) => {
    if (err) {
      console.error('Error creating file:', err);
      return;
    }
    console.log('File created successfully');
  });


  //reading a file
  fs.readFile('01_file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
  })



// const fs = require("fs")
// fs.stat("01_dir",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(stat)
// })
// fs.mkdir("01_dir",(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("created successfully")
// })

