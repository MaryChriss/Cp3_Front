document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            createTaskElement(task);
        });
    }

    function createTaskElement(taskText) {
        const newTaskElement = document.createElement('li');
        newTaskElement.textContent = taskText;
        todoList.appendChild(newTaskElement);
    }

    loadTasks();

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const newTaskText = todoInput.value.trim();
        if (newTaskText !== '') {
            createTaskElement(newTaskText);

            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks.push(newTaskText);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            todoInput.value = '';
        }
    });
});
