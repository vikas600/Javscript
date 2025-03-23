const myNum= [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.map( (num) => num +10);
// const newNums = myNum.map( (num) => {return num+10});   // using scope and we need to return

const newNums = myNum
.map( (num) => num * 10)
/*
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
  ] */
 // for first mp
.map( (num) =>num +1)
/*[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]*/  // for second map num +1;
.filter( (num) => num >= 40)
console.log(newNums)

