// const score = 100; 
// console.log(score); 

// const balance = new Number(100.123454);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));// two digits after decimal

// console.log(balance.toPrecision(1));// three significant digits --> starting from first non zero digit


// const hundreds = 1000000000000; 
// console.log(hundreds.toLocaleString("en-IN"));


// //++++++++++++++++Math+++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(-4.56));
// console.log(Math.ceil(4.56));
// console.log(Math.floor(4.8));
// console.log(Math.max(4,4,2,2));

// math.random() -- very important 

console.log(Math.random()); //values ==> [0,1)
const max = 5; 
console.log(Math.floor(Math.random()*max)); // values ==> [0,max);

const min = 3; 

console.log(Math.floor(Math.random() * (max-min+1) + min)); // values = > [min,max];