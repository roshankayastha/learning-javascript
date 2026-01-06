/* Create a faulty calculator using Javascript
This faulty calculator does the following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
10% of the times
+ -------> -
* -------> +
- -------> /
/ -------> **
*/
let a = Number(prompt("Enter your first number: "));
let b = Number(prompt("Enter your second number: "));
let sum = a+b
let sub = a-b
let mul = a*b
let div = a/b
let exp = a**b
c = Math.random();
console.log(c)
if(c<0.1){
    console.log("The sum calculation of your numbers is: ",sub)
    console.log("the multiplication calculation of your numbers is: ",sum)
    console.log("the subtraction calculation of your numbers is: ",div)
    console.log("the division calculation of your number is: ",exp)
}
else{
    console.log("The sum calculation of your numbers is: ",sum)
    console.log("the multiplication calculation of your numbers is: ",mul)
    console.log("the subtraction calculation of your numbers is: ",sub)
    console.log("the division calculation of your number is: ",div)
}
