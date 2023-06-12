
// DOM referencing
var formEl = document.querySelector('#task-form');

var tasksToDoEl = document.querySelector("#tasks-to-do");


//dynamically generating HTML
var createTaskHandler =  function(event) {
    
    event.preventDefault();

    var listItemEl = document.createElement("li");

    listItemEl.textContent = "This is a new task!";

    listItemEl.className = "task-item";

    tasksToDoEl.appendChild(listItemEl);
};


// Call back function for createTaskHandler() function , and makes form work!
formEl.addEventListener("submit", createTaskHandler);