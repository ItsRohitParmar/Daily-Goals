const title = document.getElementById("title");
const description = document.getElementById("description");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
// console.log(localStorage.getItem(something));
const task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];

showAllTask();


addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("submited");
    removeAllTask();

    task.push({ title: title.value, description: description.value });

    localStorage.setItem("task", JSON.stringify(task));
    showAllTask();
})



function showAllTask() {
    task.forEach((value, index)=>{
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");

        const div = document.createElement("div");
        
        const p = document.createElement("p");
        p.setAttribute("class", "title");
        p.innerText = value.title;
        div.append(p);

        const span = document.createElement("span");
        span.setAttribute("class", "description");
        span.innerText = value.description;
        div.append(span);

        taskDiv.append(div);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete");
        deleteBtn.setAttribute("type", "submit");
        deleteBtn.innerText = "-";
        taskDiv.append(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            removeAllTask();
            task.splice(index, 1);
            console.log(task);

            localStorage.setItem("task", JSON.stringify(task));

            showAllTask();
        })

        deleteBtn.addEventListener('mouseover', ()=>{
            taskDiv.style.backgroundColor = "green";
        })

        deleteBtn.addEventListener('mouseout', ()=>{
            taskDiv.style.backgroundColor = "";
        })

        taskList.prepend(taskDiv);
    })
}


function removeAllTask(){
    task.forEach(()=>{
        const div =  document.querySelector(".task");
        div.remove();
    })
}



