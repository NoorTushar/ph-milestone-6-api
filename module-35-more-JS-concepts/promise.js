// promise is a function
// promise takes in parameters = resolve, reject
// if promise is fulfilled, resolve function is executed
// if not, reject function is executed.

const myLoader = () => {
   return new Promise((resolve, reject) => {
      const success = Math.random();

      if (success <= 0.5) {
         resolve(success);
      } else {
         reject(success);
      }
   });
};

// now go to browser and call the function in the console.

// ## use the promise like below if you want

myLoader()
   .then((data) => console.log(`resolved data ${data}`))
   .catch((err) => console.log(`rejected data ${err}`));

// ## USING ASYNC AWAIT

// function call kore korte hoy

// function er agey async mention korte hobe
async function loadData() {
   // response ta akta variable e nite hobe
   const res = await fetch("");

   // response ta akhon json data te convert korte hobe
   const data = await res.json();

   // use the data
   console.log(data);
}

// now call the async function

loadData();

// ## creating async with arrow function

const withArrow = async () => {
   const res = await fetch("");
   const data = await res.json();
   console.log(data);
};

withArrow();
