
let a =  'devender';

        //Stirng : charAt
        let x = a.charAt(4)

//String : indexOf
x = a.indexOf('v')

        //String : concat :: 1
        let str = "Devender"
        str = str.concat("Dhyani")
        console.log(str)

        //String : concat :: 2
        str = str.concat(' ','chand',' ','dhyani')


//String : slice:1 {can take values in -ve}
let sl = "Slicing"
sl = sl.slice(0,2)
console.log(typeof(sl))

        //String : trim
        let s3 = "  trimming  "
        console.log(s3.trim())

//String : charAt
let s4 = "charAt"
console.log(s4.charAt(0))

        //String : length
        let s5 = "length"
        console.log(s5.length)

//String : replaceAll
let s6 = "replacing, dancing, learning"
console.log(s6.replaceAll("ing","ed"))
//String : replace
let s6_1 = "replacing, dancing, learning"
console.log(s6_1.replaceAll("ing","ed"))

        //String : split
        let s7 = "Split,splits,spliting"
        let s7_SplittedArr = s7.split(',')
        console.log(s7_SplittedArr)

let s8 = "aharCodeAt"
console.log(s8.charCodeAt(0))


        //string : subString {can not take values in -ve}
        let s9 = "substring"
        console.log(s9.substring(-6,-1))

//string : substr
let s10 = "substring"
console.log(s10.substr(3,2))

//template literals

