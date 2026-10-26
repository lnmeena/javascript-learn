let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString('en-IN'));

// let myNewDate = new Date(2026,9,27,0,39,59,10);
// let myNewDate = new Date("2026-10-27");
let myNewDate = new Date("10-27-2026");
// console.log(myNewDate.toLocaleString("en-IN"));

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myNewDate.getTime());

console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate.toLocaleString("en-IN"));
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//locale string provide multiple options and formatting 
let date = new Date("2026-10-27T10:30:00");

console.log(date.toLocaleString("en-US", {
    weekday: "narrow",
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
}));






