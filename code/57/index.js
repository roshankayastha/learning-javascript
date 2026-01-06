console.log("I am a tutorial on loops");    
//notes quick quiz 1 : write a sample forloop of your choice
for(let a=1;a<=10;a++){
    console.log(a)
}

//notes quick quiz 2 : write a sample forin of your choice
let o = {
    name: "Roshan",
    age: 18,
    college: "Bhaktapur Multiple Campus"
}
for (const key in o) {
    const element = o[key]
    console.log(key, element)
}

//notes quick quize 3: write a sample while loop of you choice
let q=1
while(q<=5){
    console.log(q)
    q++
}

//notes quick quiz 4 : write a sample do while loop of your choice
let r = 1
do{
    console.log(r)
    r++
}while(r<=6)