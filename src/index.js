document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    }

    taskInput.value = "";
  });
});
