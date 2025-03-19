 // singleton
 //  Object.create

 // object Literals

 const mySym = Symbol("key1")


 const JsUser = {
    name: "Hitesh",
    "full name" : "hitesh Choudhary",
    // mySym: "mykey1",  // this will give error kyunki symbols ko [] bracket mai lena hai

    [mySym]: "mykey1",   // this will give correct
    age: 18,
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" ,"Saturday"]

 }

// console.log(JsUser.email);
// or  two ways to access
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);   // "full name "  . se access nahi hoga   ( JsUser.full name ) if we try to access this it will give error so we can access it using JsUser["full name"]

// console.log(JsUser[mySym]);


JsUser.email= "hitest@chatgpt.com"
// Object.freeze(JsUser)  // this will freeze object and no one can modify object
// JsUser.email= "hitest@microsoft.com" // we will freeze object now email is not change it remain same hitesh@chatgpt.com

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

