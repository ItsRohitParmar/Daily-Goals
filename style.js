const taskName = document.getElementById("taskName");
const task = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const taskArray = localStorage.getItem(task) ? JSON.parse(localStorage.getItem(task)) : [];

showAllTask();


addBtn.addEventListener("click", () => {

    removeAllTask();

    let title = taskName.value;
    let description = task.value;
    taskArray.push({ title, description });
    console.log(taskArray);

    localStorage.setItem(task, JSON.stringify(taskArray));
    showAllTask();
})

function showAllTask() {
    taskArray.forEach((value, index)=>{
        const taskcontainer = document.createElement("div");
        taskcontainer.setAttribute("class", "taskcontainer")

        const p = document.createElement("p");
        p.setAttribute("class", "task");
        p.innerText = value.description;
        taskcontainer.append(p);

        const img = document.createElement("img");
        img.setAttribute("src", "./Icons/remove.png");
        img.setAttribute("alt", "remove");
        taskcontainer.append(img);

        img.addEventListener("click", () => {
            removeAllTask();
            taskArray.splice(index, 1);
            console.log(taskArray);

            localStorage.setItem(task, JSON.stringify(taskArray));

            showAllTask();
        })

        taskList.prepend(taskcontainer);
    })
}


function removeAllTask(){
    taskArray.forEach((value , index)=>{
        const div =  document.querySelector(".taskcontainer");
        div.remove();
    })
}



