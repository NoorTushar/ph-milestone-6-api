// visit https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/todos/1")
   // this URL is an API
   // fetch korle akta promise return hoy
   // nichey then diye promise ta resolve hoy
   .then((response) => response.json())
   // here .json() is close to JSON.parse() but not same
   // .json() abar arekta promise return kore
   // nichey then diye abar promise ta resolve hobe.
   .then((json) => console.log(json));
// amra aikhane json na lekhe, result ba data o lekhte partam

// same codes written again for clarity:

document.getElementById("load-data").addEventListener("click", () => {
   const url = "https://jsonplaceholder.typicode.com/todos/1";

   fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json, typeof json));
   // {userId: 1, id: 1, title: 'delectus aut autem', completed: false} 'object'
});
