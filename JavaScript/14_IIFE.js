// Immediately Invoked function Expressions (IIFE)

//global scope ke pollution se problem hoti h kyi baar
//to us global ke scope ke variables ya fir jo uske declarations
// hai to usko hatane ke liy hum IIFE ka use krte h

// Syntax
(function chai(){
    //named iife
    console.log(`DB connected`);  
}) (); // must use semicolon to revoke function

(() => {
    //unnamed iife
    console.log(`DB Two connected`);
}) ()