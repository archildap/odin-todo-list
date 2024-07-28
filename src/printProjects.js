export default function printProjects(obj) {
    const projectsSection = document.createElement('div');
    const projectsContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const addProjectInput = document.createElement('input');

    addProjectBtn.textContent = 'Add Project';

    projectsSection.classList.add('project-section');
    projectsContainer.classList.add('projects-container');
    addProjectBtn.classList.add('project-submit');
    addProjectInput.classList.add('project-input');
    projectsSection.appendChild(addProjectBtn);
    projectsSection.appendChild(addProjectInput);
    projectsSection.appendChild(projectsContainer);

    document.body.appendChild(projectsSection)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const div = document.createElement('div');
            const project = document.createElement('a');
            const projectRemove = document.createElement('button');

            project.textContent = key;
            projectRemove.textContent = 'X';
            projectRemove.dataset.project = key;
            project.classList.add('project');
            projectRemove.classList.add('project-remove');
            div.appendChild(project);
            div.appendChild(projectRemove);
            projectsContainer.appendChild(div);
        }
    }
}