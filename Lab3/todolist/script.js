const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let toDoCounter = 0;

function addTask(){
    if(inputBox.value == ''){
        alert("Add a task!");
    } else {
        if(toDoCounter==0){
            let checkedBtn = document.createElement("button");
            checkedBtn.id="check";
            checkedBtn.textContent="check all";
            listContainer.appendChild(checkedBtn);
            let clrall = document.createElement("button");
            clrall.id="btn";
            clrall.textContent="Clear all";
            listContainer.appendChild(clrall);
        }
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        toDoCounter++;
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        toDoCounter--;
        if(toDoCounter==0)document.getElementById("btn").remove();
        saveData();
    }
    else if(e.target.id==="btn"){
        var divElements = document.querySelectorAll('li');
        divElements.forEach(function(element) {
            element.remove();
        });
        document.getElementById("checked").remove();
        document.getElementById("btn").remove();
        toDoCounter=0;
        saveData();
    }
    else if(e.target.id==="check"){
        var divElements = document.querySelectorAll('li');
        divElements.forEach(function(element) {
            element.classList.toggle("checked");
        });
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("counter", toDoCounter);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    toDoCounter=localStorage.getItem("counter");
}
showTask();