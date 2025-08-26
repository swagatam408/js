// let score= "33" 
// console.log(typeof score) 
// its a string 


// let score="33abc" 
// console.log(typeof score) 
// still its a string 


// let score=33abc 
// console.log(typeof score) 

// converting string into numbers 

let score ="33" 
let valueInNumber=Number(score) 
console.log(typeof valueInNumber ); 
//converts string into number 


 let marks =45 
 let value =String(marks) 
 console.log(typeof value) 
 //converts numbers to string 


//  let points ="33abc" 
// let pointnumber=Number(points) 
// console.log(typeof pointnumber ); 
// //output is still a number 
// console.log(pointnumber) 
// //this is giving a nan value 

 let points =null
let pointnumber=Number(points) 
console.log(typeof pointnumber ); 
//output is still a number 
console.log(pointnumber) 
//this is giving a value of zero
// for undefined it will give nan,for non convertable string it will return nan, for booleann if true then 1 and if false then 0
 
let user=true 
let tick=Number(user) 
console.log(tick) 

//for boolean 
//1==true, 0==false, ""==false, "string"==true

