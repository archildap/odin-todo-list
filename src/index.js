import makeTodos from './makeTodos';
import makeProjects from './makeProjects';
import addProject from './addProject';


function projectsController() {
    const projects = makeProjects();

    addProject('dailyTodos', projects);
    addProject('work', projects);

    const addTodo = (obj, project) => {
        projects[project].push(obj);
    }

    const removeTodo = (project, index) => {
        projects[project].splice(index, 1);
    }

    const getProjects = () => {
        return { ...projects };
    }

    const logTodos = () => { console.log(projects) };

    return { getProjects, addTodo, logTodos, removeTodo }
}

const projectOne = projectsController();
projectOne.addTodo(makeTodos('Study', 'Study web development', 'TODAY!', 'HIGH'), 'dailyTodos');
projectOne.logTodos();
projectOne.removeTodo('dailyTodos', 0);
projectOne.addTodo(makeTodos('Study', 'Study web development', 'TODAY!', 'HIGH'), 'dailyTodos');


