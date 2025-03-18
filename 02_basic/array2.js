const marvelHeros = ["thor" , "IronMan" ,"spiderMan"]
const dcHeros = ["superman" ,"flash" , "batman"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3])  // it take 2 array as data and 2 arr it on index 3
// so if we want to access  element of 2 array so we can access in that way

// console.log(marvelHeros[3][1])

// // concat method
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)


const allNewHeros= [...marvelHeros , ...dcHeros]
// console.log(allNewHeros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);




console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score = 100
let score2= 200
let score3=300
console.log(Array.of(score,score2,score3));
