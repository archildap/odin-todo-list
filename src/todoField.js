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

export default function todoField() {
    const form = document.createElement('form');
    const formUl = document.createElement('ul');
    const submitBtn = document.createElement('button');

    formUl.appendChild(fieldMaker('title', 'text', 'todo-title'));
    formUl.appendChild(fieldMaker('description', 'text', 'todo-description'));
    formUl.appendChild(fieldMaker('dueDate', 'text', 'todo-dueDate'));
    formUl.appendChild(fieldMaker('priority', 'text', 'todo-priority'));
    formUl.appendChild(fieldMaker('check', 'text', 'todo-check'));

    submitBtn.textContent = 'Add Task';
    submitBtn.classList.add('submit-btn');
    form.setAttribute('id', 'todo-form');

    form.appendChild(formUl);
    form.appendChild(submitBtn);
    document.body.appendChild(form);
}