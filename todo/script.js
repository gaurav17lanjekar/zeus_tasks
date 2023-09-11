const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter a task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
        let span=document.createElement("span");
        span.innerHTML="\u00D7";
        li.appendChild(span);
    }
}

document.getElementById('input-box').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});

listContainer.addEventListener("click", deleteTask);
function deleteTask(e) {
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();  