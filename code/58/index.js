// Chapter-3 practice set
//qn.1
// let obj = {
//     harry:98,
//     rohan:70,
//     aakash:7
// }
// for (let i = 0; i<Object.keys(obj).length; i++){
//     console.log("The mark of "+ Object.keys(obj)[i] + " are: " +obj[Object.keys(obj)[i]])
// }

// //qn.2
// let obj = {
//     harry:98,
//     rohan:70,
//     aakash:7
// }
// for (const key in obj) {
//     const element = obj[key];
//     console.log("The mark of "+key+" is " +element)
// }

// //qn.3
// let num = 69
// const numba = prompt("Enter the secret number:")
// if (numba == num){
//     alert("That is the correct number! You pass")
// }
// else{
//     alert("Try again!!!")
// }

//qn.4
function num(a,b,c,d,e){
sum = a+b+c+d+e
mean = sum/5
}

num(10,20,30,40,50)
console.log("the numbers are ", num)
console.log("The mean of the given numbers : ",mean)
