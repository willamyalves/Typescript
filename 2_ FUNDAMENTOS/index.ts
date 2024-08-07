// Number
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.1526156;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

// String
let firstName: string = "Willamy";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Alves Gomes";

fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof fullName);

console.log("------------------------");

// Boolean
let a: boolean = false;

console.log(a);

console.log(typeof a);

a = true;

console.log(a);

console.log("------------------------");

// Annotation e Inference

let ann: string = "Teste";

let inf = "Teste 2";

// ann = true;

// inf = 5;

console.log("Testando...");
