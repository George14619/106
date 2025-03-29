function saveTask(e) {
    e.preventDefault(); //this stops the page from reloading

    console.log("saveTask is running");

    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#txtDate").val();
    const status = $("#txtStatus").val();
    const budget = $("#numBudget").val();

    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    displayTask(taskToSave);
}

function displayTask(task){
    let syntax = `
    <div class="task-container" style="border-color:${task.color}">
        <div class="task">
            <div classs="task-information">
                <h5>${task.title}</h5>
                <P>${task.description}</p>
            </div>
            
            <div class="task-status">${task.status}</div>

            <div class="task-date-budget">
                <span>${task.date}</span>
                <span>${task.budget}</span>
            </div>
        </div>
    </div>
    `
    $("#list").append(syntax);
}

function init() {
    console.log("the init is running");

    // Hook events
    $("#btnSave").click(saveTask);
}

window.onload = init;



