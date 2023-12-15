document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTaskInput = document.getElementById('new-task');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');

    addBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.classList.add('todo-item');
            taskItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
            `;
            todoList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    });

    clearBtn.addEventListener('click', function() {
        const completedTasks = document.querySelectorAll('.todo-item input:checked');
        completedTasks.forEach(task => {
            task.parentElement.remove();
        });
    });
});