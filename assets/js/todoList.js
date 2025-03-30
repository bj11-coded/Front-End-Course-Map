// variable decleration 
let input = document.querySelector('#task');
let addTask = document.querySelector('.addTask');
let taskList = document.querySelector('#taskList');

// inital empty task array;
let task = [];
console.log(task)
// local storage to store task after refresh 
let taskStorgage = localStorage.getItem('taskList');
if (taskStorgage != null) {
    let originalTask = JSON.parse(taskStorgage);
    task = originalTask;
    displayTask();
}

// condition checking for task
addTask.addEventListener('click', function () {
    let newTask = input.value;
    if (newTask.trim() === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a Your task. The field cannot be empty.',
            icon: 'error',
            confirmButtonText: 'OKAY'
        });
        return;
    }

    // creating  an object for task
    // using Date.now() to create a unique id for each task so that we can remve it later and also to store the task in local storage
    let taskObj = {
        id: Date.now(),
        text:newTask,
    };

    // push task to array with notificaiton swal
    if(task){
        Swal.fire({
            title: 'Success!',
            text: 'Task added successfully.',
            icon: 'success',
            confirmButtonText: 'OKAY'
        }),
        task.push(taskObj);

    }

    // locally stroing the task to view the task  inspect and go to application and check the local storage
    // JSON.stringify to convert the object into string and store it in local storage
    localStorage.setItem('taskList', JSON.stringify(task));
    displayTask();
});

console.log(task);


// function to display task in the list
function displayTask ()  {
    // clear the task list to avoid duplication
    taskList.innerHTML = "";
    for ( i = 0; i < task.length; i++){
        let {id , text } = task[i];
        let li = document.createElement('li');
        li.innerHTML = `<span>${text}</span>`;
        li.classList.add('taskListItem');
        taskList.appendChild(li);
    }
}


// function to remove task
function removeTask() {
    let clearTask = document.querySelector('#task');
    clearTask.value = ' ';
}


