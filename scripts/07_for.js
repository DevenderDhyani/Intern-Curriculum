let arr = ['1','2','3','4',5]
//for of is used to access the values at perticular index
for(let key of arr){
    console.log(key)
}
//for in is used to access the value of index itself
for(let key in arr){
    console.log(key)
}
//forEach is used to iterate over an array or obejct
arr.forEach(ele => {
    //process.stdout.write to avoid new line character after each console.log
    process.stdout.write(typeof ele + ' ')
})