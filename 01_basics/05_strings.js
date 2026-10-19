const name = "lnmeena";
const repoCount = 20;

// console.log(name + repoCount + "done"); correct but not preferred 

//backtics method - preferred 
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare and initialize a string 
const gameName = new String("LN-MEENA");
// console.log(gameName);
// console.log(gameName[6]);

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('L'));

// const newString1  = gameName.substring(0,4);
// const newString2  = gameName.substring(0);
// const newString3  = gameName.substring(-5); // treat neg as 0 \
// const newString4  = gameName.substring(4,1); // result of 1 to 4 

//  console.log(newString1);
//  console.log(newString2);
//  console.log(newString3);
//  console.log(newString4);

//indexes for slice L N - M E E N A
//                  0 1 2 3 4 5 6 7
//                 -8-7-6-5-4-3-2-1

// const anotherString1 = gameName.slice(-6,-2);
// const anotherString3 = gameName.slice(6,2);
// const anotherString2 = gameName.slice(-6);
// console.log(anotherString1);
// console.log(anotherString2);
// console.log(anotherString3);// empty string 


// trim --> remove white space , newline char, and tab char from beginning and end to of the string;  NOT_==> not from between the words; 
// const newStringOne = "  LN  Meena Jaipur  ";
// const newStringTwo = "\n LN\nMeena \t";
// console.log(newStringTwo.trim());
// console.log(newStringOne.trim());
// console.log(newStringOne);


//replace - replace first occurance 
//replaceAll - replace all the occurances 
//includes - check whether present or not 

// let str1  = "LN MEENA LN";
// let modifiedStr1 = str1.replace("LN","ln");
// let modifiedStr2 = str1.replaceAll("LN","ln");
// console.log(str1);
// console.log(modifiedStr1);
// console.log(modifiedStr2);
// console.log(str1.includes("MOTO"));

//Split
// let str = "apple,banana,mango";

// console.log(str.split(",")[0].split("")[0].toUpperCase());
// // ["apple", "banana", "mango"]

// console.log("hello".split(""));
// // ["h", "e", "l", "l", "o"]

// console.log("one two three".split(" "));
// // ["one", "two", "three"]

//start with and end with 
// let str = "JavaScript";

// console.log(str.startsWith("Java",1)); // true
// console.log(str.startsWith("Script")); // false
// console.log(str.startsWith("Script",4)); // false
// let filename = "resume.pdf";

// console.log(filename.endsWith(".pdf")); // true
// console.log(filename.endsWith(".jpg")); // false


console.log("LN".repeat(5));

