//promise
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login successful");
  }, 1000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Asyn/await 
async function getData() {
   try {
    const result = await Promise.resolve("Data received!");

    console.log(result);
  } catch (error) {
    console.log(error);
  } Promise.resolve("Data received");

  
}

getData();


//Async promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=> res.json())
.then((data)=>console.log(data));
console.log("jonas");


//Async (catch error)
async function getUser() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log("Error", error)
  }
}

getUser();
