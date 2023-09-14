let score="22abc";

let typeNumber=Number(score);
console.log(typeNumber);
console.log(typeof score);

/* 33=> 33
"33"=>33
null=>0
true=>1
"22abc=>NaN"
*/

let playerName="vikas"
let typeString=String(playerName);

console.log(playerName);
console.log(typeof playerName);

/*
 "vikas"=>vikas
 33=>33
*/

let isLoggedIn=1;
let typeBoolean=Boolean(isLoggedIn);

console.log(typeBoolean);
console.log(typeof typeBoolean);

/*
1=>true
0=>false
true=>true
"vikas"=>true;
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
primitive :String, Number, Boolean, BigInt, symbol
non primitibe daya type: array, objects, function
stack(primitive) and heap(non primitive)

In primitive data type variables are copy
and non primitive data type varibles are store in stack and referece to the heap

example non primitive 
let userName={            
    name:"vikas"
    age:21
}


store in heap
{
    name:"vikas"
    age:21
}
*/