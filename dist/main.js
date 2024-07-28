/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/makeProjects.js":
/*!*****************************!*\
  !*** ./src/makeProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeProjects)
/* harmony export */ });
function makeProjects() {
    const projects = {};

    return projects;
}

/***/ }),

/***/ "./src/makeTodos.js":
/*!**************************!*\
  !*** ./src/makeTodos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeTodos)
/* harmony export */ });
function makeTodos(title, description, dueDate, priority, check) {
    return { title, description, dueDate, priority, check }
}

/***/ }),

/***/ "./src/printProjects.js":
/*!******************************!*\
  !*** ./src/printProjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printProjects)
/* harmony export */ });
function printProjects(obj) {
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

/***/ }),

/***/ "./src/printTodos.js":
/*!***************************!*\
  !*** ./src/printTodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printTodos)
/* harmony export */ });
function printTodos(arr, currentProject) {
    const todosContainer = document.createElement('div');
    const projectHeader = document.createElement('h3');
    projectHeader.textContent = currentProject;
    todosContainer.classList.add('todos-container');
    todosContainer.appendChild(projectHeader);
    document.body.appendChild(todosContainer);

    arr.map((todo, index) => {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('p');
        const removeTodoBtn = document.createElement('button');
        const todoDueDate = document.createElement('p');

        removeTodoBtn.textContent = 'remove';
        todoTitle.textContent = todo.title;
        todoDueDate.textContent = todo.dueDate;

        todoDiv.classList.add('todo-container');
        todoDiv.dataset.index = index;
        removeTodoBtn.classList.add('todo-remove');

        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDueDate);
        todoDiv.appendChild(removeTodoBtn);
        todosContainer.appendChild(todoDiv);
    })

}

/***/ }),

/***/ "./src/todoField.js":
/*!**************************!*\
  !*** ./src/todoField.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoField)
/* harmony export */ });
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

function todoField() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTodos */ "./src/makeTodos.js");
/* harmony import */ var _makeProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeProjects */ "./src/makeProjects.js");
/* harmony import */ var _printTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printTodos.js */ "./src/printTodos.js");
/* harmony import */ var _todoField_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoField.js */ "./src/todoField.js");
/* harmony import */ var _printProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printProjects.js */ "./src/printProjects.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








function projectsController() {
    const projects = (0,_makeProjects__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
        (0,_printTodos_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects.getProjects()[currentProject], currentProject);
        (0,_printProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projects.getProjects());
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
        projects.addTodo((0,_makeTodos__WEBPACK_IMPORTED_MODULE_0__["default"])(title.value, description.value, dueDate.value, priority.value, check.value), currentProject);
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
        ;(0,_printProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projects.getProjects());
        (0,_todoField_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_printTodos_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projects.getProjects()[currentProject], currentProject);
        document.querySelector('.submit-btn').addEventListener('click', handleTaskSubmit)
        document.querySelector('.project-submit').addEventListener('click', handleAddProject);
        document.querySelectorAll('.project').forEach(item => item.addEventListener('click', handleProjectChange))
    }

    console.log(projects.getProjects())

    return { initialLoad }
}

displayController().initialLoad();




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZixhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDLGdDQUFnQyxPQUFPO0FBQ3ZDLGtDQUFrQyxPQUFPO0FBQ3pDLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ007QUFDRDtBQUNGO0FBQ1E7QUFDMUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEIsUUFBUSw2REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWE7QUFDckIsUUFBUSx5REFBUztBQUNqQixRQUFRLDBEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21ha2VQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWtlVG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJpbnRQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcmludFRvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9GaWVsZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0ge307XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjayB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFByb2plY3RzKG9iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XHJcblxyXG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJyk7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3VibWl0Jyk7XHJcbiAgICBhZGRQcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbnB1dCcpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpXHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGtleTtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50VG9kb3MoYXJyLCBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0O1xyXG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MtY29udGFpbmVyJyk7XHJcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xyXG5cclxuICAgIGFyci5tYXAoKHRvZG8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCByZW1vdmVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIHJlbW92ZVRvZG9CdG4udGV4dENvbnRlbnQgPSAncmVtb3ZlJztcclxuICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG5cclxuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdG9kb0Rpdi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgcmVtb3ZlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLXJlbW92ZScpO1xyXG5cclxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyZW1vdmVUb2RvQnRuKTtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcclxuICAgIH0pXHJcblxyXG59IiwiZnVuY3Rpb24gZmllbGRNYWtlcihmaWVsZExhYmVsLCBpbnB1dFR5cGUsIGlkTmFtZSkge1xyXG4gICAgY29uc3QgZmllbGRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpZE5hbWV9YCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWROYW1lfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7aWROYW1lfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7aW5wdXRUeXBlfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2ZpZWxkTGFiZWx9YDtcclxuXHJcblxyXG4gICAgZmllbGRMaS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBmaWVsZExpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGRMaTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZpZWxkKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IGZvcm1VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBmb3JtVWwuYXBwZW5kQ2hpbGQoZmllbGRNYWtlcigndGl0bGUnLCAndGV4dCcsICd0b2RvLXRpdGxlJykpO1xyXG4gICAgZm9ybVVsLmFwcGVuZENoaWxkKGZpZWxkTWFrZXIoJ2Rlc2NyaXB0aW9uJywgJ3RleHQnLCAndG9kby1kZXNjcmlwdGlvbicpKTtcclxuICAgIGZvcm1VbC5hcHBlbmRDaGlsZChmaWVsZE1ha2VyKCdkdWVEYXRlJywgJ3RleHQnLCAndG9kby1kdWVEYXRlJykpO1xyXG4gICAgZm9ybVVsLmFwcGVuZENoaWxkKGZpZWxkTWFrZXIoJ3ByaW9yaXR5JywgJ3RleHQnLCAndG9kby1wcmlvcml0eScpKTtcclxuICAgIGZvcm1VbC5hcHBlbmRDaGlsZChmaWVsZE1ha2VyKCdjaGVjaycsICd0ZXh0JywgJ3RvZG8tY2hlY2snKSk7XHJcblxyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1mb3JtJyk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1ha2VUb2RvcyBmcm9tICcuL21ha2VUb2Rvcyc7XHJcbmltcG9ydCBtYWtlUHJvamVjdHMgZnJvbSAnLi9tYWtlUHJvamVjdHMnO1xyXG5pbXBvcnQgcHJpbnRUb2RvcyBmcm9tICcuL3ByaW50VG9kb3MuanMnO1xyXG5pbXBvcnQgdG9kb0ZpZWxkIGZyb20gJy4vdG9kb0ZpZWxkLmpzJztcclxuaW1wb3J0IHByaW50UHJvamVjdHMgZnJvbSAnLi9wcmludFByb2plY3RzLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvamVjdHNDb250cm9sbGVyKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBtYWtlUHJvamVjdHMoKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVG9kbyA9IChvYmosIHByb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJvamVjdHMgfTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KCdkYWlseScsIHByb2plY3RzKTtcclxuICAgIGFkZFByb2plY3QoJ3dvcmsnLCBwcm9qZWN0cyk7XHJcblxyXG4gICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgZ2V0UHJvamVjdHMsIGFkZFRvZG8sIHJlbW92ZVRvZG8gfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUNvbnRyb2xsZXIoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RzQ29udHJvbGxlcigpO1xyXG5cclxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9ICdkYWlseSc7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHByaW50VG9kb3MocHJvamVjdHMuZ2V0UHJvamVjdHMoKVtjdXJyZW50UHJvamVjdF0sIGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICBwcmludFByb2plY3RzKHByb2plY3RzLmdldFByb2plY3RzKCkpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDaGFuZ2UpKVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1yZW1vdmUnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1yZW1vdmUnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9SZW1vdmUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFza1N1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNoZWNrJyk7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZGVzY3JpcHRpb24udmFsdWUgPT09ICcnIHx8IGR1ZURhdGUudmFsdWUgPT09ICcnIHx8IHByaW9yaXR5LnZhbHVlID09PSAnJyB8fCBjaGVjay52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RzLmFkZFRvZG8obWFrZVRvZG9zKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIGNoZWNrLnZhbHVlKSwgY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIHRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBkdWVEYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnJztcclxuICAgICAgICBjaGVjay52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByb2plY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0JykudmFsdWUpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMuZ2V0UHJvamVjdHMoKSlcclxuICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZG9SZW1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gdG9kby5kYXRhc2V0LmluZGV4O1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5yZW1vdmVUb2RvKGN1cnJlbnRQcm9qZWN0LCB0b2RvSW5kZXgpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHByaW50UHJvamVjdHMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7XHJcbiAgICAgICAgdG9kb0ZpZWxkKCk7XHJcbiAgICAgICAgcHJpbnRUb2Rvcyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpW2N1cnJlbnRQcm9qZWN0XSwgY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYXNrU3VibWl0KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RDaGFuZ2UpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzLmdldFByb2plY3RzKCkpXHJcblxyXG4gICAgcmV0dXJuIHsgaW5pdGlhbExvYWQgfVxyXG59XHJcblxyXG5kaXNwbGF5Q29udHJvbGxlcigpLmluaXRpYWxMb2FkKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==