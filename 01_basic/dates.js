// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,2,18)
// let myCreatedDate = new Date(2025,2,18,6,50)
// let myCreatedDate = new Date("2025-03-18")
let myCreatedDate = new Date("03-18-2025")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()+1); // by default month start from 0 for eg 0 for jan 1 for feb 
// if we want exact month simply +1 getMonth()
// console.log(newDate.getDay());

// `${newDate.getDay()}`


newDate.toLocaleString('default',{
    weekday:"long"
})

