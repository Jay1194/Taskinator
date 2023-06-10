
// DOM referencing
var buttonEl = document.querySelector("#save-task");

var tasksToDoEl = document.querySelector("#tasks-to-do");


//dynamically generating HTML
var createTaskHandler =  function() {

    var listItemEl = document.createElement("li");

    listItemEl.textContent = "This is a new task!";

    listItemEl.className = "task-item";

    tasksToDoEl.appendChild(listItemEl);
};


// Call back function for createTaskHandler() function , and makes button work!
buttonEl.addEventListener("click", createTaskHandler);