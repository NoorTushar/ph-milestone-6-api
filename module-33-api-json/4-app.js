function loadData() {
   fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
}

function loadUsers() {
   const url = "https://jsonplaceholder.typicode.com/users";
   fetch(url)
      .then((res) => res.json())
      .then((data) => displayUsers(data));
}

function displayUsers(users) {
   for (let user of users) {
      console.log(user);
   }
}
