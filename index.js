// Get a reference to the task input element.
const taskInput = document.getElementById("task-input");

// Get a reference to the add task button element.
const addTaskButton= document.getElementById("add-task-button");

// Get a reference to the task list element.
const taskList= document.getElementById("task-list");

// Add an event listener to the add task button element.
addTaskButton.addEventListener("click", ()=>{
    // Get the value of the task input element.
    const taskText= taskInput.value;
    // Create a new task list item element.
    const taskItem= document.createElement("li");
    // Add the task text to the task list item element.
    taskItem.textContent= taskText;
    // Add the task list item element to the task list element.
    taskList.appendChild(taskItem);
    // Clear the task input element.
    taskInput.value="";
});
// Add an event listener to the task list element.
taskList.addEventListener("click", (event)=>{
    // Get the target element of the event.
    const targetItem=event.target;
    // If the target element is a task list item element, toggle its completed class.
    if(targetItem.tagName==="LI"){
        targetItem.classList.toggle("completed");
    } 
});


















