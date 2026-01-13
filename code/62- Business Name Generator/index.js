/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy
Amazing
Fire

Shop names:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub */

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};

let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};

let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

function getRandomfromObject(obj){
    let rand = Math.floor(Math.random()*3)+1;
    return obj[rand];
}

let shopname = getRandomfromObject(obj1)+" "+getRandomfromObject(obj2)+" "+getRandomfromObject(obj3)+".";
console.log("The generated business name is : "+shopname);