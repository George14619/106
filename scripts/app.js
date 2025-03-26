function saveTask()
{
    console.log("saveTask is running");
}

function init()
{
    console.log("the init its running");
    //load data

    //hook events
    $("#btnSave").click(saveTask);
}




window.onload = init;

