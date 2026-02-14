const tasks = []; // storing tasks

function addTask() {
    let input = document.getElementById('inputTask');
    let task = input.value;

    // when input is empty but clicking add task button
    if (task === ""){
        alert("please write any tsak"); 
    }
    tasks.push(task); // add task to array (tasks)

    showingTasks();
}

function showingTasks() {
    let list = document.getElementById('taskList');
    list.innerHTML = "";

    for (let i=0; i<tasks.length; i++){
        list.innerHTML += `<li>${tasks[i]}</li>`;
        console.log();
    }
}