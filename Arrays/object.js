//creating objects

//objects start with curly brackets {}
const person = {name:"aakasmik",age:20}
console.log(typeof(person)); 

//object dont have index

// console.log(person.name); // to access data as like array

const person1 = {
    name: "aakasmik",
    age: 20,
    hobbies: ["sleeping","coding","learning"]
}
console.log(person1);

console.log(person1.hobbies); //same as array 
//or

console.log(person1["name"]);


//we use . to acess array

//to add key value pair

// can use dot or bracket notation
// person1.gender = "male";
//or
person1["gender"] = "male";

//dot vs bracket notation
const key = "email";
const person3 = {
    name: "ram",
    age: 20,
    "person hobbies": ["playing","dancing","singing"]
}
console.log(person3["person hobbies"]); // when we wanna assign more than one word we use "person hobbies"
//so in such case we use bracket notation

person3.key = "ram@gmail.com"


//iterate objects

const person4 = {
    name: "hari",
    age: 22,
    "person hobbies": ["guitar","dancing","singing"]
}

// for in loop

for(let key in person4){
    // console.log(person4[key]);
    console.log(`${key} : ${person4[key]}`);//it prints both key and its value
}

//if you only want keys only

console.log(typeof(Object.keys(person4)));

const val = Array.isArray((Object.keys(person4)));
console.log(val); //it gives val is array or not as true or false

//skipped part ---- computed properties





