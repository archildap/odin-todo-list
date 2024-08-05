import makeTodo from './makeTodo.js';
import printTodos from './printTodos.js';
import todoField from './todoField.js';
import printProjects from './printProjects.js';
import header from './header.js';
import './style.css';


function projectsController() {
    const projects = {};

    const addProject = (projectName) => {
        projects[projectName] = [];
    }

    const addTodo = (obj, project) => {
        if (!projects[project]) return;
        projects[project].push(obj);
    }

    const removeTodo = (project, index) => {
        projects[project].splice(index, 1);
    }

    const removeProject = (project) => {
        delete projects[project];
    }

    const getProjects = () => {
        return { ...projects };
    }

    addProject('daily', projects);
    addTodo(makeTodo('lorem ipsum dorem', 'asdf', '2024-08-04T11:15', 'high'), 'daily')
    addTodo(makeTodo('lorem ipsum dorem', 'asdf', '2024-08-04T11:15', 'high'), 'daily')
    addTodo(makeTodo('lorem ipsum dorem', 'asdf', '2024-08-04T11:15', 'high'), 'daily')
    addTodo(makeTodo('lorem ipsum dorem', 'asdf', '2024-08-04T11:15', 'high'), 'daily')

    return { addProject, getProjects, addTodo, removeTodo, removeProject }
}


function displayController() {
    const projects = projectsController();

    let currentProject = 'daily';

    const clearScreen = () => {
        const content = document.querySelector('#content');
        content.remove()
    }

    const printScreen = () => {
        header();
        printProjects(projects.getProjects(), currentProject);
        todoField();
        printTodos(projects.getProjects()[currentProject], currentProject);
        document.querySelector('.todo-submit-btn').addEventListener('click', handleTodoSubmit);
        document.querySelector('.project-submit').addEventListener('click', handleAddProject);
        document.querySelectorAll('.project').forEach(item => item.addEventListener('click', handleProjectChange));
        document.querySelectorAll('.project-remove').forEach(item => item.addEventListener('click', handleProjectRemove));
        if (document.querySelectorAll('.todo-remove')) {
            document.querySelectorAll('.todo-remove').forEach(item => item.addEventListener('click', handleTodoRemove));
        }
    }

    const updateScreen = () => {
        clearScreen();
        printScreen();
        console.log('reload')
    }

    const handleTodoSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById('todo-title');
        const description = document.getElementById('todo-description');
        const dueDate = document.getElementById('todo-dueDate');
        const priority = document.getElementById('todo-priority');

        if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '') {
            return
        }

        projects.addTodo(makeTodo(title.value, description.value, dueDate.value, priority.value), currentProject);
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '';
        updateScreen();
    }

    const handleProjectChange = (event) => {
        if (currentProject === event.target.textContent.toLowerCase()) {
            return;
        };
        currentProject = event.target.textContent.toLowerCase();
        updateScreen();
    }

    const handleAddProject = (e) => {
        e.preventDefault();
        const projectName = document.querySelector('.project-input').value.toLowerCase();
        if (projectName && !projects.getProjects()[projectName]) {
            projects.addProject(projectName);
            currentProject = projectName;
            updateScreen();
        }
    }

    const handleTodoRemove = (e) => {
        const todo = e.target.parentNode
        const todoIndex = todo.dataset.index;

        projects.removeTodo(currentProject, todoIndex);
        updateScreen();
    }

    const handleProjectRemove = (e) => {
        e.stopPropagation();
        const projectToRemove = e.target.dataset.project;
        projects.removeProject(projectToRemove);
        if (projectToRemove === currentProject) {
            currentProject = Object.keys(projects.getProjects())[0];
        }
        updateScreen();
    }

    return { printScreen }
}

displayController().printScreen();



