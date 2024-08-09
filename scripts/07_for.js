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



//while loop
while(arr[2]>=0){
    console.log(arr[2])
    arr[2]--
}
arr[2] = 3
console.log("-------------do-while---------------")
do{
    console.log(arr[2])
    arr[2]--
}while(arr[2]>=0);


let conditioncheck = true
let x = 0
while(x>10 && conditioncheck){
    if(arr[2]>arr[3]){
    console.log(arr[2])
    break
    }else{
        console.log(x)
        x++
        continue
    }
   
}

//if else if 
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


switch(x){
    case 0 : {
        console.log("0")
        break
    } 
    case 1 : {
        console.log("1")
        break
    } 
    case 2 : {
        console.log("2")
        break
    } 
    case 3 : {
        console.log("3")
        break
    } 
    case 4 : {
        console.log("4")
        break
    } 
    case 5 : {
        console.log("5")
        break
    } 
    case 6 : {
        console.log("6")
        break
    } 
    case 7 : {
        console.log("7")
        break
    } 
    case 8 : {
        console.log("8")
        break
    } 
    case 9 : {
        console.log("9")
        break
    } 
    case 10 : {
        console.log("10")
        break
    } 
    case 11 : {
        console.log("11")
        break
    } 
}
