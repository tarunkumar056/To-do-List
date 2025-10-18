const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add task when pressing Enter
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBtn.click();
    }
});

// Function to add task
function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${text}</span>
        <button>Delete</button>
    `;

    // Toggle completed
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('button').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
}

