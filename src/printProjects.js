export default function printProjects(obj) {
    const projectsContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const addProjectInput = document.createElement('input');

    addProjectBtn.textContent = 'Add Project';

    projectsContainer.classList.add('projects-container');
    addProjectBtn.classList.add('project-submit');
    addProjectInput.classList.add('project-input');
    projectsContainer.appendChild(addProjectBtn);
    projectsContainer.appendChild(addProjectInput);

    document.body.appendChild(projectsContainer)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const project = document.createElement('a');

            project.textContent = key;
            project.classList.add('project');
            projectsContainer.appendChild(project);
        }
    }
}