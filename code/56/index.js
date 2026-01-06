console.log("I am conditional tutorial")
let age = 8
if(age>18){
    console.log("Yes you can drive!")
}
else{
    console.log("No you can't drive")
}





/*Practice set chapter-2*/
// qn.1
let a = 12
if(a>10 && a<20){
    console.log("The age is above 10 and below 20")
}
else{
    console.log("Invalid age")
}

//qn.2
let q = 5
switch(q){
    case 1:
        q = "Sunday"
        break;
        case 2:
            q = "Monday"
            break;
            case 3:
                q = "Tuesday"
                break;
                case 4:
                    q = "Wednesday"
                    break;
                    case 5:
                        q = "Thursday"
                        break;
                        case 6:
                            q = "Friday"
                            break;
                            case 7:
                                q = "Saturday"
                                break;
                                default:
                                    "Invalid selection!!"
}
console.log("the day is " + q)

//qn.3
let k = 4
if(k%2  == 0 && k%3==0){
    console.log("The number is divisible by 2 & 3");
}
else{
    console.log("The number isn't divisible by either 2 & 3")
}

//qn.4
let u = 4
if(k%2  == 0 || k%3==0){
    console.log("The number is divisible by 2 or 3");
}
else{
    console.log("The number isn't divisible by either 2 or 3")
}

//qn.5
let ge = 18
let msg = (ge>=18)? "Yes you can drive":"No, you can't drive"
console.log(msg)