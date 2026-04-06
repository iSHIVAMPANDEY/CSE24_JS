// Asynchronous Programming in JavaScript
// Asynchronous programming allows you to perform tasks without blocking the main thread. This is crucial for tasks that take time, such as fetching data from a server or reading files.
//resolve and reject are functions that are used to control the state of a Promise. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise can be in one of three states: pending, fulfilled, or rejected. When you create a new Promise, it starts in the pending state. You can use the resolve function to transition the Promise to the fulfilled state and provide a value, or you can use the reject function to transition it to the rejected state and provide an error.
// Example of using Promises

//aysnc/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous-looking manner. It makes it easier to read and write asynchronous code by allowing you to use the await keyword to pause the execution of a function until a Promise is resolved or rejected.

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
}

// In this example, the getData function is declared as async, which allows us to use the await keyword inside it. The fetch function returns a Promise that resolves to a Response object. By using await, we can pause the execution of the getData function until the fetch Promise is resolved, and then we can call the json method on the response to parse the data. Finally, we log the data to the console.
// fetch api

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// In this example, we use the fetch API to make a GET request to the specified URL. The fetch function returns a Promise that resolves to a Response object. We then call the json method on the response to parse the data, and we log it to the console. If there is an error during the fetch operation, we catch it and log it as well.

//Error handling in asynchronous programming is crucial to ensure that your application can gracefully handle unexpected situations. When working with Promises, you can use the .catch() method to handle errors that occur during the asynchronous operation. When using async/await, you can use try/catch blocks to handle errors.

try {
    var x= y+10; // This will throw a ReferenceError because 'y' is not defined
}
catch (error) {
    console.log("An error occurred: " + error.message);
}

// Local storage allows data to be stored in the browser permanently. It is a key-value storage mechanism that can be accessed using JavaScript. You can use localStorage to store data that you want to persist across sessions, such as user preferences or authentication tokens.

// store data: 

localStorage.setItem("username", "Jeet");

// Retrieve data:
let username = localStorage.getItem("username");
console.log(username);

//remove data:

localStorage.removeItem("username");

// Store Obect:

var user = {name: "Jeet", age: 24};
localStorage.setItem("user", JSON.stringify(user));

// Retrieve Object:

let userData = JSON.parse(localStorage.getItem("user"));
console.log(data.name, data.age);

