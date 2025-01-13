let tasks = []
const myList = document.getElementById("myList")

console.log(tasks);
let index;


function addTask(){

   tasks.push(document.getElementById("taskValue").value)
    renderTasks()

    color: rgb(246, 4, 4);
}
function remove(index){
    tasks.splice(index, 1)
    renderTasks()
}

function test(){
    console.log(tasks)
}

function renderTasks(){
    myList.innerHTML = 
    tasks.map((task, index) => 
        `<div  style="display: flex; align-items: center;">
        <button className="button" id="check" onclick=remove(${index})> V</button>
        <span id="to-do">${task}</span>
    </div>`).join("")

    let a = document.getElementById("tasksLength")
    a.innerHTML = (`<p> Tasks: ${tasks.length}</p> `)
}

