


// =======>> Regular Expression <<======= //

// /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/  





// =======>> Repeating Characters <<======= // 

/* 

[]      //single character
[abc123]000      // All Match           //a000 b000 c000 1000
[^a]000          // not matched a000    //    b000 c000 1000
(?<![a-zA-Z])000        ------ 000 a000 000 a000 000a       //Negetive Lookbehind
[0-1]+          //secuence match
[0-9]{11}       //match only 11 numbers
[a-z]{4,8}      // match 4 to 8 word length match
[a-z]{4,}       // match 4 to Infinity word lenght match 

*/




