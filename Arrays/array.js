//--------------------------------------------------INTRO TO ARRAYS------------------------------------------------------------
//order collection of items

let fruit = ["apple","banana","mango"];
fruit[1] = "grapes";
console.log(fruit[1]); // [1] to print index

let numbers = [1,2,3,5];
console.log(numbers);

let mixed = [1,2,3.5,"aakasmik", null,undefined];
console.log(mixed);

let obj = {}; // object has always curly brackets // also called object literals

//checking type

console.log(typeof fruit);   // object
Array.isArray(fruit);

// checking if it is array or not syntax: Array.isArray
console.log(Array.isArray(fruit));

console.log(Array.isArray(obj)); // so obj isn't array

//---------------------------------------------------------ARRAY PUSH AND POP--------------------------------------------------------------------

//array push
let fruits = ["apple","banana","mango"];
fruits.push("grapes"); // thapna lai push use hunxa
console.log(fruits);

//array pop
fruits.pop(); // last index element lai bahira nikaldinxa
console.log(fruits);

// console.log(fruits.pop()); //remove vako element print garxa

let popfruit = fruits.pop();
console.log("popped fruit is ", popfruit);

//unshift : add element at the begining of array

fruits.unshift("guava", "watermelon"); // can add one or more elements
console.log(fruits);

//shift : removes element form starting
fruits.shift();
console.log(fruits);

// console.log(fruits.shift());
// Note ://push and pop is fast as compared to shift and unshift
let removedfruit = fruits.shift();
console.log("the fruit removed from starting is", removedfruit);


//---------------------------------------------------  PRIMITIVE VS REFRENCE DATA TYPES--------------------------------------------

//primtive data type
let num1 = 6;
let num2 = num1;
console.log("the value of num1 is ", num1);
console.log("the value of num2 is ", num2);
num1++;
console.log("after incrementing");
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);

//refrence data type
let array1 = ["item1", "item2"];        // primitive data type ma chai euta matrai push hunxa but refrence ma both hunxa
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing");
console.log("array1", array1);
console.log("array2", array2);


//clone array

let arr1 = ["item1","item2"];
// let arr2 = ["item1","item2"];

//using spread operator
// let arr2 = [...arr1];

//using concatentaion
let arr2 = arr1.slice(0).concat(["aakasmik","ghimire"]);

arr1.push("item");
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);  //testing whether items of arr1 and arr2 are same or not

console.log("FOR LOOP IN ARRAY");



//for loop in array
let sports = ["cricket","football","basketball","boxing"];
let sports2 = [];
console.log(sports.length);  // to check length of array

console.log(sports[sports.length-1]); //to get last index of array

for(let i=0; i<sports.length; i++){
    sports2.push(sports[i].toUpperCase());
}

console.log(sports2);


//using const in arrays

// use const while assigning array
const brands = ["bmw","mercedes"];
// brands = ["honda","maserati"];
brands.push("ferrari");
console.log(brands);

//while loop in array

const country = ["nepal","india","bhutan","china"];
const country2=[];

let i=0;
while(i<country.length){
    // console.log(country[i].toUpperCase());
    country2.push(country[i].toUpperCase());
    i++;
}
console.log(country2);


//for of loop in array


for(let countries of country){
    console.log(countries.toUpperCase());
}

//array destructuring

const myArray = ["value1","value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("The value of myvar1 is", myvar1);
// console.log("The value of myvar2 is", myvar2);

let[myvar1,myvar2] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);








 







































