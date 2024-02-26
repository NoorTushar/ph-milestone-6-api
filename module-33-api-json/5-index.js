function loadUsers2() {
   const url = "https://jsonplaceholder.typicode.com/users";

   fetch(url)
      .then((res) => res.json())
      .then((data) => showUsers(data));
}

function showUsers(data) {
   const userListUL = document.getElementById("user-list");
   for (const user of data) {
      console.log(user.name);

      const li = document.createElement("li");
      li.innerText = user.name;

      userListUL.appendChild(li);
   }
}
