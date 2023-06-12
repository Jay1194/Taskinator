
// DOM referencing
var formEl = document.querySelector('#task-form');

var tasksToDoEl = document.querySelector("#tasks-to-do");

// anomonous function
var createTaskHandler =  function(event) {
    
//stops submit button from refreshing page    
    event.preventDefault();

//dynamically generating HTML
    var listItemEl = document.createElement("li");

    listItemEl.textContent = "This is a new task!";

    listItemEl.className = "task-item";

    tasksToDoEl.appendChild(listItemEl);
};


// Call back function for createTaskHandler() function , and makes form submit button work work!
formEl.addEventListener("submit", createTaskHandler);