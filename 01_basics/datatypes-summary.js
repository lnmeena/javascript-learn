//primitive 

// 7 category : String , Number , Boolean , null , undefined , symbol , BigInt


// Dynamically typed == Js 
// let x = 10; 
// console.log(typeof x);
// x = "ln";
// console.log(typeof x);
// x = true; 
// console.log(typeof x);

//symbol 
// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);
// //BigInt 
// let BigNumber = 1213432432443243288888n; 


// Non primitive - Reference type 

    //array , objects , Functions

  //   const heros = ["ironMan", "Hulk", "Thor"];

  //  let myObj =  {
  //       name:"LnMeena",
  //       age: 21,
  //   }

  // const myFunc = function(){
  //   console.log("helloWorld");
  // }
  // console.log(typeof myObj);


  // *****************************************************************************************
  //Stack->> Primitive  , Heap ->> Non-Primitive

let myInstaName = "LNmeena";
let anotherName = myInstaName; 
anotherName = "laxmiNarayan Meena";
console.log(anotherName);
console.log(myInstaName);

let userOne = {
  email:"123@google.com",
  upi:"123@ybl"
}
let userTwo = userOne; 
userTwo.email = "321@google.com"; 
//user one and two both copy the reference of same object 
// console.log(userTwo.email);
// console.log(userOne.email);

let userThree = {
  name:"ln"
}
let userFour = userThree;

console.log(userThree.name);
console.log(userFour.name);

userFour = {name:"Meena"};//now user Four points to different object while user 3 points to the original object 
console.log(userThree.name);
console.log(userFour.name);









