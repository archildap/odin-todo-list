import Cancel from './images/cancel.png';
import Add from './images/add.svg';
import Task from './images/task-square.svg';
import handleFormToggle from './handleFormToggle';


export default function printProjects(obj, currentProject) {
    const projectsSection = document.createElement('nav');
    const projectsContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const addProjectInput = document.createElement('input');
    const content = document.querySelector('#content');
    const projectSubmitForm = document.createElement('form');
    const projectSubmitToggle = new Image();

    addProjectBtn.textContent = 'Add Project';

    projectSubmitForm.setAttribute('id', 'project-form');
    projectsSection.classList.add('project-section');
    projectsContainer.classList.add('projects-container');
    addProjectBtn.classList.add('project-submit', 'btn');
    addProjectInput.classList.add('project-input');
    addProjectInput.setAttribute('minlength', '1');
    addProjectInput.setAttribute('required', '');
    projectSubmitToggle.src = Add;
    projectSubmitToggle.classList.add('project-submit-toggle');
    projectSubmitToggle.setAttribute('title', 'Add Project');

    projectSubmitForm.style.display = 'none';

    projectSubmitToggle.addEventListener('click', (e) => handleFormToggle(e, projectSubmitForm, addProjectInput));

    projectSubmitForm.appendChild(addProjectBtn);
    projectSubmitForm.appendChild(addProjectInput);
    projectsSection.appendChild(projectSubmitToggle);
    projectsSection.appendChild(projectSubmitForm);
    projectsSection.appendChild(projectsContainer);

    content.appendChild(projectsSection)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const projectDiv = document.createElement('div');
            const div = document.createElement('div');
            const project = document.createElement('p');
            const projectRemove = new Image();
            const taskSquareSvg = new Image();

            if (key === currentProject) {
                projectDiv.classList.add('current-project')
            }

            project.textContent = key;
            projectRemove.src = Cancel;
            taskSquareSvg.src = Task;
            projectRemove.dataset.project = key;
            projectRemove.setAttribute('title', 'Remove Project');
            projectDiv.classList.add('project');
            projectRemove.classList.add('project-remove');
            taskSquareSvg.classList.add('square-task-svg');
            div.appendChild(taskSquareSvg);
            div.appendChild(project);
            projectDiv.appendChild(div);
            projectDiv.appendChild(projectRemove);
            projectsContainer.appendChild(projectDiv);
        }
    }
}