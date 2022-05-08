// Strings acting as arrays:


// The following statement is inaccurate in regards to JavaScript (under-the-hood differences from other languages), but is still relevant:
// Strings can be looked at basically, as arrays of chars, that have been manipulated (via similar methods like split() and join()).
// Because of said manipulation, many array methods won't work on strings - although there are some alternatives.
// You can use split() or the spread operator to convert the string into an array - use array methods on it - and then join() them back together.

//Let there be string:
const str = 'abcde';

// An example of an alternative, to using string methods on strings
const char = str[3]; //chars can be accessed this way similarly to elements of an array
//=> d

//The above would normally been: console.log(str.charAt(3));
//But lets try another array method on our string:

//str.reverse();        
//=>TypeError: str.reverse is not a function

//Whoops!! this threw an error! str is not an array...

//Lets try somthing else - lets use array methods on an array:
const arrStr = str.split('');   // can also be achived like this: const arrStr = [...str];
//=> [ 'a', 'b', 'c', 'd', 'e' ]

//Great! Now let's try reverse() again:
const revArrStr = arrStr.reverse();
//=> [ 'e', 'd', 'c', 'b', 'a' ]
//Not this time, Error!

//we need our string to be a string again:
const revStr = revArrStr.join(''); //back togeter again
//=> 'edcba'
//Now that's the stuff!

//But there alot of chars wasted all over this page - for no good reason.
// Lets shorthand it all:

const shortRevStr = str.split('').reverse().join('');
//=> LOG: edcba

//Short and sweet!

// Other methods that