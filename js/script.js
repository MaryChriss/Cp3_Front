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

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        deleteButton.classList.add('delete-btn');
        newTaskElement.appendChild(deleteButton);


        deleteButton.addEventListener('click', function () {
            deleteTask(newTaskElement, taskText);
        });

        todoList.appendChild(newTaskElement);
    }

    function deleteTask(taskElement, taskText) {
        todoList.removeChild(taskElement);

        let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks = savedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
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
