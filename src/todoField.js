import AddSignGreen from './images/add-sign-green.svg';
import handleFormToggle from './handleFormToggle';


function fieldMaker(fieldLabel, inputType, idName) {
    const fieldLi = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', `${idName}`);
    input.setAttribute('id', `${idName}`);
    input.setAttribute('name', `${idName}`);
    input.setAttribute('type', `${inputType}`);
    input.setAttribute('required', '');

    label.textContent = `${fieldLabel}`;


    fieldLi.appendChild(label);
    fieldLi.appendChild(input);

    return fieldLi;
}


function dropDownMenu(question, options, id) {
    const fieldLi = document.createElement('li');
    const fieldLabel = document.createElement('label');
    const fieldSelect = document.createElement('select');
    const fieldOption = document.createElement('option');

    fieldLabel.setAttribute('for', id);
    fieldSelect.setAttribute('id', id);
    fieldSelect.setAttribute('name', id);
    fieldSelect.setAttribute('required', '')
    fieldOption.setAttribute('value', '');

    fieldLabel.textContent = question;
    fieldOption.textContent = '--Please choose an option--';

    fieldSelect.appendChild(fieldOption);
    fieldLi.appendChild(fieldLabel);
    fieldLi.appendChild(fieldSelect);

    options.map(option => {
        const fieldOption = document.createElement('option');

        fieldOption.textContent = option;
        fieldOption.setAttribute('value', option.toLowerCase());
        fieldSelect.appendChild(fieldOption);
    })

    return fieldLi;
}

export default function todoField() {
    const todoFormSection = document.createElement('div');
    const todoFormToggle = new Image();
    const form = document.createElement('form');
    const formUl = document.createElement('ul');
    const todoSubmitBtn = document.createElement('button');
    const content = document.querySelector('#content');

    formUl.appendChild(fieldMaker('Title', 'text', 'todo-title'));
    formUl.appendChild(fieldMaker('Description', 'text', 'todo-description'));
    formUl.appendChild(fieldMaker('Due Date', 'datetime-local', 'todo-dueDate'));
    formUl.appendChild(dropDownMenu('Task Priority', ['Low', 'Medium', 'High'], 'todo-priority'));

    todoFormToggle.src = AddSignGreen;
    todoFormToggle.classList.add('todo-form-toggle');
    todoFormToggle.setAttribute('title', 'Add Todo');
    todoSubmitBtn.textContent = 'Add Task';
    todoSubmitBtn.classList.add('todo-submit-btn', 'btn');
    todoFormSection.setAttribute('id', 'todo-form-section');
    todoSubmitBtn.setAttribute('type', 'submit')
    form.setAttribute('id', 'todo-form');

    form.style.display = 'none';
    todoFormToggle.addEventListener('click', (e) => handleFormToggle(e, form, document.getElementById('todo-title')));

    form.appendChild(formUl);
    form.appendChild(todoSubmitBtn);
    todoFormSection.appendChild(todoFormToggle);
    todoFormSection.appendChild(form);
    content.appendChild(todoFormSection);
}