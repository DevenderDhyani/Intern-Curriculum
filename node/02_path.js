const { dir } = require("node:console")
const path = require("node:path")

//basename will give the name of the file (and we can provide the name of the file with extension of file which could be optional)
let filename = path.basename("/home/user/devender/downloads/javascript/dsa/01_map.js")
console.log(filename)

//dirname will print the directories before fds in below case
let dirname = path.dirname("/wokring/dhyanies/fds")
console.log(dirname)

let extnam = path.extname("/efeyvss/w2tfgvs/asdf.html")
console.log(extnam)


//************** resolve *****************
let res = path.resolve("02_dir/devender/dhyani","abc.txt")
console.log("res: ",res)




//format
let file_folder_format = path.format({
    //dir: '/home/user/dir', //resembles to root dir like in windows we have c:\
    //dir: 'home/user/dir', //resembles to current working directory
    dir: './home/user/dir',
    base: 'file.txt', //base filename
  })
console.log(path.isAbsolute(file_folder_format)); // Output: '/home/user/dir/file.txt'