import makeTodo from './makeTodo.js';
import printTodos from './printTodos.js';
import todoField from './todoField.js';
import printProjects from './printProjects.js';
import header from './header.js';
import './style.css';
import { isToday, isPast } from "date-fns";

function projectsController() {

    let projects = {};

    const checkLocalStorage = () => {
        return (JSON.parse(localStorage.getItem('projects')))
    }

    if (checkLocalStorage()) {
        projects = JSON.parse(localStorage.getItem('projects'));
    }

    const addProject = (projectName) => {
        projects[projectName] = [];
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const addTodo = (obj, project) => {
        if (!projects[project]) return;
        projects[project].push(obj);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const removeTodo = (project, index) => {
        projects[project].splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projects));

    }

    const changeStatus = (project, index) => {
        projects[project][index].check = projects[project][index].check === false ? true : false;
        localStorage.setItem('projects', JSON.stringify(projects));

    }

    const removeProject = (project) => {
        delete projects[project];
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const getProjects = () => {
        return { ...JSON.parse(localStorage.getItem('projects')) };
    }

    const removeInvalidTodos = () => {
        if (projects.today) {
            projects.today.forEach((item, index) => {
                if (!isToday(item.dueDate)) {
                    removeTodo('today', index);
                }
            })
        }
    }

    if (!checkLocalStorage()) {
        addProject('today', projects);
        localStorage.setItem('currentProject', 'today');
    }

    return { addProject, getProjects, addTodo, removeTodo, removeProject, changeStatus, removeInvalidTodos }
}


function displayController() {
    const projects = projectsController();

    const clearScreen = () => {
        const content = document.querySelector('#content');
        content.remove()
    }

    const printScreen = () => {
        header();
        projects.removeInvalidTodos();
        printProjects(projects.getProjects(), localStorage.getItem('currentProject'));
        todoField();
        printTodos(projects.getProjects()[localStorage.getItem('currentProject')], localStorage.getItem('currentProject'));
        document.querySelector('.todo-submit-btn').addEventListener('click', handleTodoSubmit);
        document.querySelector('.project-submit').addEventListener('click', handleProjectSubmit);
        document.querySelectorAll('.project').forEach(item => item.addEventListener('click', handleProjectChange));
        document.querySelectorAll('.project-remove').forEach(item => item.addEventListener('click', handleProjectRemove));
        if (document.querySelectorAll('.todo-remove')) {
            document.querySelectorAll('.todo-remove').forEach(item => item.addEventListener('click', handleTodoRemove));
        }
        document.querySelectorAll('.complete-todo').forEach(item => item.addEventListener('click', handleTodoComplete));
    }

    const updateScreen = () => {
        clearScreen();
        printScreen();
    }

    const checkTodoValidity = (title, description, dueDate, priority) => {
        if (localStorage.getItem('currentProject') === 'today' && !isToday(dueDate.value)) {
            dueDate.setCustomValidity('Date is not today!');
            return false
        } else if (isPast(dueDate.value) && !isToday(dueDate.value)) {
            dueDate.setCustomValidity('Date is not today!');
            return false
        } else if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '') {
            return false
        }
        return true;
    }

    const handleTodoSubmit = (event) => {
        event.preventDefault();
        const title = document.getElementById('todo-title');
        const description = document.getElementById('todo-description');
        const dueDate = document.getElementById('todo-dueDate');
        const priority = document.getElementById('todo-priority');

        if (!checkTodoValidity(title, description, dueDate, priority)) return;

        projects.addTodo(makeTodo(title.value, description.value, dueDate.value, priority.value), localStorage.getItem('currentProject'));
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '';
        updateScreen();
    }

    const handleProjectChange = (event) => {
        if (localStorage.getItem('currentProject') === event.target.textContent.toLowerCase()) {
            return;
        };
        localStorage.setItem('currentProject', event.target.textContent.toLowerCase());
        updateScreen();
    }

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        const projectName = document.querySelector('.project-input').value.toLowerCase();
        if (projectName && !projects.getProjects()[projectName]) {
            projects.addProject(projectName);
            localStorage.setItem('currentProject', projectName);
            updateScreen();
        }
    }

    const handleTodoRemove = (e) => {
        const todo = e.target.parentNode
        const todoIndex = todo.dataset.index;

        projects.removeTodo(localStorage.getItem('currentProject'), todoIndex);
        updateScreen();
    }

    const handleTodoComplete = (e) => {
        const todo = e.target.parentNode
        const todoIndex = todo.dataset.index;

        projects.changeStatus(localStorage.getItem('currentProject'), todoIndex);
        updateScreen();
    }

    const handleProjectRemove = (e) => {
        e.stopPropagation();
        const projectToRemove = e.target.dataset.project;
        projects.removeProject(projectToRemove);
        if (projectToRemove === localStorage.getItem('currentProject')) {
            localStorage.setItem('currentProject', Object.keys(projects.getProjects())[0])
        }
        updateScreen();
    }

    return { printScreen }
}

displayController().printScreen();



