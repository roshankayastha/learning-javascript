// console.log("This is Strings tutorial")
// let a = "Roshan"
// console.log(a[1]);
// console.log(a.length);
// let real_name = "Roshan"
// let friend = "Rohan"
// console.log("His name is "+ real_name +" and his friends name is "+friend)
// console.log(`His name is ${real_name} and his friends name is ${friend}.`) //literal template using backtics.
// let b = "Aayush"
// console.log(b.toUpperCase());
// console.log(b.toLocaleLowerCase());
// console.log(b.length)
// console.log(b.slice(1,4));
// console.log(b.replace("yu","44"))
// console.log(b.concat(a, " done"))
// let c = "shivam            "
// console.log(c.trim())
// console.log(c.endsWith)



                                                //Chapter 4{Strings} - Practice Set
//1.What will the following print in js
console.log("Ros\"".length)
//ans: It will print 4 because with the help of \ we can use " inside a string bounded by "" then " will also be printed
//there for the ans is 4.


//2.Explore the includes, startsWith & endsWith functions of a string
let a = "Roshan"
console.log(a.includes("s")); // outputs true as the string includes s but if we use S the it will output false as Javascript is case sensitive. 
console.log(a.startsWith("R")); //outputs true as the string starts with R!
console.log(a.endsWith("k")); //outputs false as the string ends with n and not k!


//3.Write a program to convert a given string to lowercase.
let b = "KASAM"
console.log(b.toLowerCase());


//4.Extract the amount out of this String
//"Please give Rs 1000"
let c = "Please give Rs 1000"
let amt = c.slice(15,19)
console.log(`the amount is Rs.${amt}.`)


//5.Try to change 4th character of a given string. Were you able to do it?
let cht = "Raghunandan"
console.log(cht.replace("h","%")) //Strings are immutable. so basically the answer is NO but here I replaced the 4th character HAHA!