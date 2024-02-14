const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//let toDoCounter = 0;

function addTask(){
    if(inputBox.value == ''){
        alert("Add a task!");
    } else {
        // if(toDoCounter==0){
        //     let clrall = document.createElement("button");
        //     clrall.id="btn";
        //     clrall.textContent="Clear all";
        //     listContainer.appendChild(clrall);
        // }
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
        //toDoCounter--;
        //if(toDoCounter==0)document.getElementById("btn").remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();