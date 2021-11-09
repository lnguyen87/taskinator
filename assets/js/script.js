var buttonEl = docuent.querySelector("#save-task");
var tasksToDoEl - document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listeItemEl = document.createElement("li");
    listeItemEl.className = "task-item";
    listeItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);