// 1 . primitive

//7 types : string , number , Boolen, null, undefined , symbol, BigInt
// there is no float in js every number is considered as a number

// symbol is a special type which we can identify diffently
const is = symbol('123')
const anotherId = symbol('123')
console.log(id == anotherId) //the output is false though they both are same number but they are considered as differnt symbol so output is false that is they are not same number


//2 . Non premitive/refernces
//array,objects,functions

const heros = ["shaktiman","naagraj"]  //this is how we wrote the arrays

let myObj = {
    name : "rahi",
    age : 19,
}  // this is how we wrote the object

const myFunction = function(){
    console.log("Hello World");
}
// this is how we wrote functions 

//we can also find the data type of everything by
console.log(typeof anotherId)
// in this way we can find datatype of anything
//function returns function in actual but we called it as object function