// trim()

let firstName = "        aakasmik         ";
console.log(firstName);
console.log(firstName.length);

// let newString = firstName.trim();
firstName = firstName.trim();
console.log(firstName);
// console.log(newString.length);    // yedi name ko space hatayera print garnu xa vane trim use garne
// console.log(newString);

// console.log(firstName.length);


//to uppercase

let lastName = "ghimire";
console.log(lastName.toUpperCase());

//to lowercase

let fullName = "AAKASMIK GHIMIRE";
console.log(fullName.toLowerCase());

//slice
//string ma adhi string slice garna paryo vane use hunxa

//start index
// end index

let fruit = "mango";
console.log(fruit);
let output = fruit.slice(1,3);  // start always 0 bata hunxa kun index samma chaine ho tesko - 1 samma jane
console.log(output);
