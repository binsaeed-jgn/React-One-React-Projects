//Review of Destruction of Object, Array, & spread/rest 

//Object
const student = {
  name: "Bashir",
  age: 21,
  department: "Software Engineering",
  level: 300
};

//Array
const courses = [
  "React",
  "JavaScript",
  "Data Structures",
  "Database"
];

//Spreed
const frontend = ["html","css", "js", "react"];
const backend = ["node","Django", "php"];
const fullstack = [...frontend,...backend];
const names = ["bash", "Adam", "Isah"];
let newNames = [...names, "Hafsah", "Aisha"];
//Rest
const fullStack = ["html","css", "js","node","Django", "php", "react",];


const {name, age, department: dept, level} = student;
const [R,Js,DS,Db ] = courses;
const [html, ...others] = fullStack;

// Rest with array destructuring
const numbers = [10, 20, 30, 40, 50];
const [first, ...remaining] = numbers;

// Rest with function parameters
function addNumbers(...numbers) {
  let total = 0;

  for (let x of numbers) {
    total = total + x;
  }

  return total;
}







console.log(name,age,dept,level);
console.log(R,Js,DS,Db);
console.log(fullstack);
console.log(newNames);
console.log(html); 
console.log(others);
console.log(first);
console.log(remaining);
addNumbers(10, 20, 30, 40);
console.log(addNumbers(10, 20, 30, 40,50));


