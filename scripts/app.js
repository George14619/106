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
    // save to the sever
    $.ajax({
        type:"POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response){
            console.log(response);
            displayTask(taskToSave);
        },
        error: function(error){
            console.log("This page will autodestroy in 5 seconds", error);
        }
    })



    // display logic
    //displayTask(taskToSave);
}
    function loadTask() {
        $.ajax({
            type: "get", 
            url: "http://fsdiapi.azurewebsites.net/api/tasks", 
            contentType: "application/json",
            success: function(response) {
                console.log(response); 
                let data = JSON.parse(response);
                console.log(data); 
                // just bring those messsages that was created by you
                for(let i=0; i<data.length;i++){
                    let list = data[i];//get every object
                    if(list.name == "George"){
                        displayTask(list);
                    }
                }
            },
            error: function(error) {
                console.log("Error fetching tasks:", error);
            }
        });
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

function testRequest() {
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(x){
            console.log(x);
        },
        error: function(error){
            console.log(error);
        }
    })
}

function init() {
    console.log("the init is running");

    // Hook events
    $("#btnSave").click(saveTask);


}

window.onload = init;

