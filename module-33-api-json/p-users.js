const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
   .then((res) => res.json())
   .then((data) => showUsers(data));

function showUsers(userData) {
   const userDiv = document.getElementById("user-container");

   for (const user of userData) {
      const div = document.createElement("div");

      div.innerHTML = `
      <h3>Id: ${user.id}</h3>
      <h2>Username: ${user.username}</h2>
      `;

      userDiv.appendChild(div);
   }
}
