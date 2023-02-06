document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // As a user, I should be able to type a task into the input field.
  // As a user, I should be able to click some form of a submit button.
  // As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

  function addToDo(todo) {
    let task = document.createElement("li");
    task.textContent = todo;
    document.querySelector("#tasks").appendChild(task);
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(e.target.new_task_description.value);
    form.reset();
  });

  //
});
