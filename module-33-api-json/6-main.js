function loadPosts() {
   const url = "https://jsonplaceholder.typicode.com/posts";

   fetch(url)
      .then((res) => res.json())
      .then((data) => displayPosts(data));
}

loadPosts();

function displayPosts(data) {
   const postContainer = document.getElementById("post-container");

   for (const post of data) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post-div");
      postDiv.innerHTML = `
      <h3>Title: ${post.title}</h3>
      <h4>by user: ${post.userId}</h4>
      <p>post id: ${post.id}</p>
      <p>${post.body}</p>
      `;

      postContainer.appendChild(postDiv);
   }
}
