alert("My ToDO List App");

let myToDoList = [];

//ADDING TASK INTO THE APP
for (let i = 0; i < 10; i++) {
  let task = prompt(`Task ${i + 1}:`).toLowerCase();
  if (task === "") {
    break;
  }
  myToDoList.push(task);
}

alert("your tasks are " + myToDoList);

while (true) {
  let action = prompt("What would you like to do? (add, delete, edit, exit)").toLowerCase();

  //ADDING MORE TASKS TO THE APP
  switch (action) {
    case "add":
      let task = prompt("Enter the task you want to add:").toLowerCase();
      myToDoList.push(task);
      console.log("Task '" + task + "' has been added sucessfully, your new tasks are " + myToDoList);
      break;

    //DELETING A TASK FROM THE APP
    case "delete":
      let taskToDelete = prompt("Enter the task you want to delete:").toLowerCase();
      let index = myToDoList.indexOf(taskToDelete);
      if (index !== -1) {
        myToDoList.splice(index, 1);
        console.log("Task '" + taskToDelete + "' has been deleted sucessfully, your new tasks are " + myToDoList);
      } else {
        console.log("Task not found.");
      }
      break;

    //EDITING OR MODIFYING AN ALREADY INPUTED TASK IN THE APP
    case "edit":
      let taskToEdit = prompt("Enter the task you want to edit:").toLowerCase();
      let editedTask = myToDoList.indexOf(taskToEdit);
      if (editedTask !== -1) {
        let newTask = prompt("Enter the new task:");
        myToDoList[editedTask] = newTask;
        console.log("Task '" + taskToEdit + "' has been edited to '" + newTask + "', your new tasks are " + myToDoList);
      } else {
        console.log("Task not found.");
      }
      break;
    case "exit":
      console.log("Your task are " + myToDoList)
      console.log("Thank you for using the app!");
      return;
    default:
      console.log("Please enter a valid action.");
  }
}
