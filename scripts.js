// scripts.js
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('tasks');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        <span>${taskInput.value} (Due: ${dueDate} - Priority: ${priority})</span>
        <div>
            <button onclick="markComplete(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('complete');
}
