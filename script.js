
const todoInput = document.getElementById('todo-input');
const todoTime = document.getElementById('todo-time');
const todoList = document.getElementById('todo-list');
const asideElement = document.getElementById('asideElement');





function submitTask() {
    const taskText = todoInput.value;
    const taskTime = todoTime.value;

    if (taskText === '' && taskTime === '') {
        alert('Please enter a task and select a date.');
        return;
    }

    const listItem = document.createElement('li');

    // Create task text element
    const taskContent = document.createElement('span');
    taskContent.textContent = `Task: ${taskText}`;
    listItem.appendChild(taskContent);

    // Create task time element
    const taskTimeElement = document.createElement('span');
    taskTimeElement.textContent = ` Date: ${taskTime}`;
    listItem.appendChild(taskTimeElement);

    // Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('completeButton');
    completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    listItem.appendChild(completeButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);

        // Hide aside element if no tasks are left
        if (todoList.children.length === 0) {
            asideElement.classList.remove('aside');
        }
    });
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    if (todoList.children.length > 0) {
        asideElement.classList.add('aside');
    }

    todoInput.value = '';
    todoTime.value = '';
;
};
