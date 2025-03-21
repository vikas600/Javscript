// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})(); // after execution parenthesis semicolon ; is neccessary 
  // global scope ke pollution ko hatana ke liye Iife use kiya

// ()()   // first parenthesis is for fun def and 2nd for execution

( (name) =>{
    console.log(`DB CONNECTED two ${name}`);
} )('hitesh')