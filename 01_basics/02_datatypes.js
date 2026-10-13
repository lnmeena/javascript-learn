"use strict" // treat all the js code as newer version 

//alert(5+5); // node js - > node define alert by default, in browser it is allowed 

// code readability should be high 


//data types 

let name = "Laxmi Narayan Meena"
let age = 21 
let isLoggedIn = true 

// number 
// bigint 
// string 
// boolean 
// null - standalone value 
// undefined => value not assigned
// symbol => unique 

// object 

console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof null); // object 
console.log(typeof undefined); // undefined 

console.log(10 / 0);       // Infinity
console.log("hello" * 2);  // NaN
console.log(typeof NaN);  // "number"

//big int

const a = 10;
const b = 10n;

console.log(BigInt(a) + b); 
