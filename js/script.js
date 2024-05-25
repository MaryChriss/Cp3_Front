document.addEventListener('DOMContentLoaded',

    function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const newTaskText = todoInput.value.trim();

        if (newTaskText !== '') { 
            const newTaskElement = document.createElement('li');
            newTaskElement.textContent = newTaskText;

            todoList.appendChild(newTaskElement);

            todoInput.value = '';
        }
    });
});