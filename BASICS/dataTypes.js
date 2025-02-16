//undefined

let firstName;
console.log(typeof firstName); // when you make a variable and didn't assign anything then it is undefined. same in case of var but in case of const it will show error.

firstName = "aakasmik";
console.log(typeof firstName, firstName);
// const string;
// console.log(string);

//null
let firstStr = null;
console.log(firstStr);
firstStr = "aakasmik";
console.log(typeof firstStr, firstStr);

//BigInt
let myNumber = 123;
console.log(myNumber);

//putting number has a limit
console.log(Number.MAX_SAFE_INTEGER); // this displays how big number you can enter

let newNumber = BigInt(3985987384975983475837485);  // big int ko last ma n aauxa
console.log(newNumber);


//while adding bigint with normal datatypes we can't add both

let firstNumber = 25;
// let secondNumber = BigInt(15);
let secondNumber = 15;

console.log(firstNumber+secondNumber);



