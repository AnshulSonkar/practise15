let title = document.getElementById("title");
let body = document.getElementById("body");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    title.textContent = data.title;
    body.textContent = data.body;
  });