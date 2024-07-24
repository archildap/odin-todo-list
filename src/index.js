import makeTodos from './makeTodos';
import makeProjects from './makeProjects';
import printTodos from './printTodos.js';
import todoField from './todoField.js';
import printProjects from './printProjects.js';


function projectsController() {
    const projects = makeProjects();

    const addProject = (projectName) => {
        projects[projectName] = [];
    }

    const addTodo = (obj, project) => {
        projects[project].push(obj);
    }

    const removeTodo = (project, index) => {
        projects[project].splice(index, 1);
    }

    const getProjects = () => {
        return { ...projects };
    }

    addProject('daily', projects);
    addProject('work', projects);

    return { addProject, getProjects, addTodo, removeTodo }
}


function displayController() {
    const projects = projectsController();

    let currentProject = 'daily';

    const updateScreen = () => {
        const todosContainer = document.querySelector('.todos-container');
        const projectsContainer = document.querySelector('.projects-container');
        projectsContainer.remove();
        todosContainer.remove();
        printTodos(projects.getProjects()[currentProject], currentProject);
        printProjects(projects.getProjects());
        document.querySelector('.project-submit').addEventListener('click', handleAddProject);
        document.querySelectorAll('.project').forEach(item => item.addEventListener('click', handleProjectChange))
        if (document.querySelectorAll('.todo-remove')) {
            document.querySelectorAll('.todo-remove').forEach(item => item.addEventListener('click', handleTodoRemove));
        }
    }

    const handleTaskSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById('todo-title');
        const description = document.getElementById('todo-description');
        const dueDate = document.getElementById('todo-dueDate');
        const priority = document.getElementById('todo-priority');
        const check = document.getElementById('todo-check');

        if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '' || check.value === '') {
            return
        }
        projects.addTodo(makeTodos(title.value, description.value, dueDate.value, priority.value, check.value), currentProject);
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '';
        check.value = '';
        updateScreen();
    }

    const handleProjectChange = (event) => {
        currentProject = event.target.textContent.toLowerCase();
        updateScreen();
    }

    const handleAddProject = () => {
        const projectInput = document.querySelector('.project-input');

        if (document.querySelector('.project-input').value) {
            projects.addProject(document.querySelector('.project-input').value);
            console.log(projects.getProjects())
            updateScreen();
        }
    }

    const handleTodoRemove = (e) => {
        const todo = e.target.parentNode
        const todoIndex = todo.dataset.index;

        projects.removeTodo(currentProject, todoIndex);
        updateScreen();
    }

    const initialLoad = () => {
        printProjects(projects.getProjects());
        todoField();
        printTodos(projects.getProjects()[currentProject], currentProject);
        document.querySelector('.submit-btn').addEventListener('click', handleTaskSubmit)
        document.querySelector('.project-submit').addEventListener('click', handleAddProject);
        document.querySelectorAll('.project').forEach(item => item.addEventListener('click', handleProjectChange))
    }

    console.log(projects.getProjects())

    return { initialLoad }
}

displayController().initialLoad();



