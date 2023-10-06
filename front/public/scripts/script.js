function addTask() {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task description.");
        return;
    }
    var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        if(taskTime.value.trim() === "")
        {
            if(taskDate.value.trim() === "")
            {
            cell1.innerHTML = `${taskInput.value}`;
            cell2.innerHTML = "No Due  ";
            cell3.innerHTML = "No Due  ";
            cell4.innerHTML = `<button onclick="deleteTask(this)">Delete</button>`;
            }
            else
            {
            cell1.innerHTML = `${taskInput.value}`;
            cell2.innerHTML = `${taskDate.value}`;
            cell3.innerHTML = "No Due";
            cell4.innerHTML = `<button onclick="deleteTask(this)">Delete</button>`;
            }
        }
        else
        {
        if(taskDate.value.trim() === "")
        {
            alert("Please enter due date.");
            return;
        }
        else
        {
            cell1.innerHTML = `${taskInput.value}`;
            cell2.innerHTML = `${taskDate.value}`;
            cell3.innerHTML = `${taskTime.value}`;
            cell4.innerHTML = `<button onclick="deleteTask(this)">Delete</button>`;
        }
        }
    tasksList.appendChild(taskItem);
    taskInput.value = "";
    taskTime.value = "";
}
function deleteTask(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }