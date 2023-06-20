
// DOM referencing
var formEl = document.querySelector('#task-form');

var tasksToDoEl = document.querySelector("#tasks-to-do");

// anomonous function
var createTaskHandler =  function(event) {

//stops submit button from refreshing page    
event.preventDefault();

//selects object element by attribute , .value -- will save text we write
var taskNameInput = document.querySelector("input[name='task-name']").value;

// Gets value of select using attribute "drop-down task type"
var taskTypeInput = document.querySelector("select[name='task-type']").value;
console.log(taskTypeInput);
   
// create list item
var listItemEl = document.createElement("li");

listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");

// give a class name
taskInfoEl.classname = "task-info";

// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl)

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
};

// Call back function for createTaskHandler() function , and makes form submit button work work!
formEl.addEventListener("submit", createTaskHandler);