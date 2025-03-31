// variable decleration
let input = document.querySelector("#task");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector("#taskList");

// inital empty task array;
let task = [];

// local storage to store task after refresh
let taskStorgage = localStorage.getItem("taskList");
if (taskStorgage != null) {
  let originalTask = JSON.parse(taskStorgage);
  task = originalTask;
  displayTask();
}

// condition checking for task
addTask.addEventListener("click", function () {
  let newTask = input.value;
  if (newTask.trim() === "") {
    Swal.fire({
      title: "Error!",
      text: "Please enter a Your task. The field cannot be empty.",
      icon: "error",
      confirmButtonText: "OKAY",
    });
    return;
  }

  // creating  an object for task
  // using Date.now() to create a unique id for each task so that we can remve it later and also to store the task in local storage
  let taskObj = {
    id: Date.now(),
    text: newTask,
  };

  // push task to array with notificaiton swal
  if (task) {
    Swal.fire({
      title: "Success!",
      text: "Task added successfully.",
      icon: "success",
      confirmButtonText: "OKAY",
    }),
      task.push(taskObj);
  }

  // locally stroing the task to view the task  inspect and go to application and check the local storage
  // JSON.stringify to convert the object into string and store it in local storage
  localStorage.setItem("taskList", JSON.stringify(task));
  displayTask();
});

console.log(task);

// function to display task in the list
function displayTask() {
  // clear the task list to avoid duplication
  taskList.innerHTML = "";
  for (i = 0; i < task.length; i++) {
    let { id, text } = task[i];
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="listItem">
            <span class="texting" contenteditable="false">${text}</span>
            <div class="btns">
                <button class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete" >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
        `;

// delete button to remove the task from the list and local storage

        let deleteBtn = li.querySelector('.delete');
        deleteBtn.addEventListener('click', function(){
            let filterTask = task.filter(function(taskObj){
                return taskObj.id !== id;     //filter the task to remove from array where id is not equal to the id of the task we want to remove
            })
            task = filterTask   // reassign the task to the filtered task
            localStorage.setItem ("taskList", JSON.stringify(task)); // update the local storage with the filtered task
            taskList.removeChild(li); // remove the task from the list
            Swal.fire({
                title: "Success!",
                text: "Task removed successfully.",
                icon: "success",
                confirmButtonText: "OKAY",
              });
        })


// edit button to edit the task in the list and local storage

        let editBtn = li.querySelector('.edit');
        let texting = li.querySelector('.texting');
        editBtn.addEventListener('click', function(){
            if(editBtn.innerHTML === `<i class="fa-solid fa-pen-to-square"></i>`){
                texting.setAttribute('contenteditable','true'); // Fix: Correct usage of setAttribute
                texting.focus();
                editBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
            }
            else{
                texting.setAttribute('contenteditable','false'); // Fix: Correct usage of setAttribute
                let updatedTask = texting.innerHTML.trim();
                if(updatedTask !== ""){
                  task =  task.map(function (taskObj){
                        if(taskObj.id === id){
                            taskObj.text = updatedTask;
                        }
                        return taskObj;
                    })
                    localStorage.setItem("taskList", JSON.stringify(task));
                   
                }
                editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
                
            }
        })

    li.classList.add("taskListItem");
    taskList.appendChild(li);
  }
}

// function to remove task
function removeTask() {
  let clearTask = document.querySelector("#task");
  clearTask.value = " ";
}
