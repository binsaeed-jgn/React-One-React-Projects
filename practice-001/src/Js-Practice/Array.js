//Arrya Map
const numbers = [2,3,4,5,6,7,8,9,];
let square = numbers.map((number)=>  number*number );

console.log(square);

//Array Filter 
let newNumbers = square.filter(number => number % 2 == 0);
console.log(newNumbers);


//Array reduce

let total = numbers.reduce((sum, num)=>{
  return (sum + num);
})
console.log(total);


//Array Sort
let decendingSquare = square.sort((a,b)=> b-a);
console.log(decendingSquare);
console.log(square);
console.log(numbers);

//Array Immutable
let decendingNumbers = [...numbers].sort((a,b)=> b-a);
console.log(decendingNumbers);
console.log(numbers);

const oddNumber = [...numbers].filter(num =>  num%2 !== 0);
console.log(oddNumber);
console.log(numbers);

//Practice
const members = [
  { name: "Bashir", score: 85 },
  { name: "Ali", score: 62 },
  { name: "Ahmad", score: 91 },
  { name: "Umar", score: 45 }
];

//get names
let memberNames = members.map(memb => memb.name);
console.log(memberNames);

//get names and score
let record = members.map(memb => (
  memb.name.score
  
));
console.log(record);

// members who passed 50

let passed = memberNames.filter((memb)=> memb.score >= 50);
console.log(passed);

//total score 
const totalScore = members.reduce((sum, memb) => sum + memb.score, 0);
console.log(totalScore);

//sort by score

let sorted = [...members].sort((a,b)=> b.score-a.score)
console.log(sorted);
 