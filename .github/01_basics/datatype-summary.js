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


//stack use for premitive and heap use for non premetive
//in stack we got copy memory and in heap we get original memory
let myYoutuename = "rahiie"
let anothername = "myYoutubename"
console.log(anothername);  // output of this is rahie
//now we will change another name
anothername = "vaish"
console.log(myYoutubename);  //now its output is rahie
console.log(anothername);   //but its ouput is vaish
//so the conclusion is there is an chnge in copy only original vaiue that is rahie is not changed
//the copy of it that is vaish is changed so all this happens in stack

//now lets see heap and here we used non primitive
// in heap we dont get copy we get original value's referance
let userOne = {
    email:"user@gogle.com"
    upi:"user@ybl"
}

let userTwo = userOne
 userTwo.email = "rahi@com"

console.log(userOne.email);
console.log(userTwo.email);
// the otput of both of this is "rahi@com" because in heap we got the reference so if there is changed in then we got it too
