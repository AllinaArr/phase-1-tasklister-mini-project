document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todo = document.querySelector("form");

  todo.addEventListener("submit", (e) => {
    e.preventDefault();
    // const submitToDo = document.querySelector("#new-task-description");

    const inputValue = e.target["new-task-description"].value;

    const list = document.querySelector("#tasks");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.addEventListener("click", () => li.remove());
    li.textContent = inputValue;

    list.append(li);
    li.appendChild(btn);
  });
});
