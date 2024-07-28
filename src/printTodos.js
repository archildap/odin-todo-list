export default function printTodos(arr, currentProject) {
    const todosContainer = document.createElement('div');
    const projectHeader = document.createElement('h3');
    projectHeader.textContent = currentProject;
    todosContainer.classList.add('todos-container');
    todosContainer.appendChild(projectHeader);
    document.body.appendChild(todosContainer);

    if (arr === undefined) {
        return;
    }


    arr.map((todo, index) => {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('p');
        const removeTodoBtn = document.createElement('button');
        const todoDueDate = document.createElement('p');

        removeTodoBtn.textContent = 'X';
        todoTitle.textContent = todo.title;
        todoDueDate.textContent = todo.dueDate;

        todoDiv.classList.add('todo-container');
        todoDiv.dataset.index = index;
        removeTodoBtn.classList.add('todo-remove');

        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(removeTodoBtn);
        todosContainer.appendChild(todoDiv);
    })

}