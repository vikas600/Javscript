
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
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user= {
    username:"hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myNewArr =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200, 400,500,1000]));

