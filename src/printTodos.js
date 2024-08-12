import capitalizeString from "./capitalizeString.js";
import TrashSvg from './images/trash.svg';
import { format, isToday } from "date-fns";


export default function printTodos(arr, currentProject) {
    const content = document.querySelector('#content');
    const todosContainer = document.createElement('div');
    const projectHeader = document.createElement('h3');

    projectHeader.textContent = capitalizeString(currentProject);
    todosContainer.classList.add('todos-container');
    todosContainer.appendChild(projectHeader);
    content.appendChild(todosContainer);

    if (arr === undefined) {
        return;
    }

    arr.map((todo, index) => {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('p');
        const removeTodoBtn = new Image();
        const todoDueDate = document.createElement('p');
        const completeTodo = document.createElement('div');
        let dueDate = format(new Date(), 'y') === format(todo.dueDate, 'y') ? format(todo.dueDate, 'MMM d h:m a') : format(todo.dueDate, 'MMM d y');

        if (isToday(todo.dueDate)) {
            todoDueDate.style.color = '#058527';
            dueDate = `Today ${format(todo.dueDate, 'h:m a')}`;
        };

        removeTodoBtn.src = TrashSvg;
        todoTitle.textContent = todo.title;
        todoDueDate.textContent = dueDate;
        todoTitle.setAttribute('title', todo.title);

        todoDiv.classList.add('todo-container');
        todoDiv.dataset.index = index;
        removeTodoBtn.classList.add('todo-remove');
        removeTodoBtn.setAttribute('title', 'Remove Todo');
        completeTodo.classList.add('complete-todo');
        todo.check === true ? completeTodo.classList.add('check') : {};


        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(removeTodoBtn);
        todoDiv.appendChild(completeTodo);
        todosContainer.appendChild(todoDiv);
    })

}