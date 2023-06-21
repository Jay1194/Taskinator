
// DOM referencing
// reference to <form> by id
var formEl = document.querySelector('#task-form');

// reference to <ul> by id
var tasksToDoEl = document.querySelector("#tasks-to-do");

// anomonous function passed parameter using event object
var taskFormHandler =  function(event) {

//stops submit button from refreshing page    
event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form");
    return false;
  }

  // form resets to default values
  formEl.reset();

  // packaged up as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send as a agument to createTaskEl
  createTaskEl(taskDataObj);
  
};

// using an object as a argument
var createTaskEl = function(taskDataObj) {
// create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};


// Call back function for taskFormHandler() function , and makes form submit button work work!
formEl.addEventListener("submit", taskFormHandler);