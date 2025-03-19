
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

// sayMyName()


// function addTwoNum(num1 , num2){
//     console.log(num1 + num2);
    
// }
function addTwoNum(num1 , num2){
//    let result = num1 + num2
//    return result
   /// or
   return num1 + num2
    
}
const result =addTwoNum(3,4)
// console.log(result);

addTwoNum(3,"4")
addTwoNum("3",4)

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return;
    // }
    //or
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())