let score = "33"
console.log(typeof score);
console.log(typeof(score));
//it is a string now .
// to convert its data type =>
    let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let newScore = "33abc"
let newValue = Number(newScore)
console.log(typeof newValue);
console.log(newValue); /* it can be converted into a number regardless
its value in it. when we print its value its NaN*/

// "33" => 33
// "33abc" => nan
// true => 1
// null => 0

let loggedIn = 1 
let boolen = Boolean(loggedIn)
console.log(boolen)

//"" => false
// "string" => true


/// ***** opeeations **** ////
console.log("1"+2+2); //=> 1222 first no. if string then all becomes string
console.log(1+2+"2"); // => 32 first no. is num then addition happens

console.log(+true);//=> 1

//prefix and postfix increment (++)
let x= 3   
let y= 3++
// x=4 y=3
let w= 4
let z= ++4
// w=5 z=5




