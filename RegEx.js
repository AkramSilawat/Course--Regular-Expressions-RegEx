


// =======>> Regular Expression <<======= //

// /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/  





// =======>> Repeating Characters <<======= // 



//  []      //single character

//  [abc123]000      // All Match           //a000 b000 c000 1000

//  [^a]000          // not matched a000    //    b000 c000 1000

//  (?<![a-zA-Z])000        ------ 000 a000 000 a000 000a       //Negetive Lookbehind

//  [0-1]+          //secuence match

//  [0-9]{11}       //match only 11 numbers

//  [a-z]{4,8}      // match 4 to 8 word length match

//  [a-z]{4,}       // match 4 to Infinity word lenght match





// =======>> MetaCharacters <<======= //

//   \d    Match any digit character(same as [0-9])

//   \w    match any word character (a-z, A-Z, 0-9 and _'sapc)

//   \s    match a white character (spaces, tabs)

//   \t    match a tab character onplay

//   d -- matches the literals character, 'd'



//   \d{3}\s\w{5}       // matched     // 455	65465

//   \d{3}\s\w{5}       // matched     // 455	hell9

//   \d{3}\s\w{5}       // No matched  // 45d    65465




// =======>> Special Character <<======= //

//   +    => the one or more quantifier

//   /    => the escape character

//   []   => the character set

//   [^]  => the negate symbol in a character set

//   ?    => the 0 or more quantifier (makes a preceding char optional)

//   .    => any character whatsoever (exept the newline character)

//   *    => the 0 or more quantifier (a bit like +)



// -->> Prectice  Code

// a[a-z]?   =>   match  =  ag , af, ar ,ab, am   // -> optional the last character

// car.      =>   match  =  car-,  car=, car?,  cars,  carz    // -> after car match any one chacter
// car.      =>   No match  =  car--,  car==, car??,  carss  

// .+        =>  // match  =  match any chacter set

// abc*      =>  // match  =  ab or abc or abcccccc

// abc\*     =>  // match  =  abc*   // skip special character on regEx





// =======>> Starting & Ending Patterns <<======= //


//    ^[a - z]{ 5 } $   =  hello    




// =======>> Alternate Characters <<======= //

//    (p|t)yre  =>  pyre  & tyre

//    (pet|toy|crazy) rabbit
// -->  pet rabbit
// -->  toy rabbit
// -->  crazy rabbit

//    (pet|toy|crazy)? rabbit   -->  hello not select  ->  rabbit select
