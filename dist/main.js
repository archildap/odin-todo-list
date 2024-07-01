/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function makeProjects() {
    return { dailyTodos: [] }
}

function makeTodos(title, description, dueDate, priority) {
    return { title, description, dueDate, priority }
}

function projectsController() {
    const projects = makeProjects().dailyTodos;

    const addTodo = (obj) => {
        projects.push(obj);
    }

    const logTodos = () => { console.log(projects) };

    return { projects, addTodo, logTodos }
}

const projectOne = projectsController();
projectOne.addTodo(makeTodos('study', 'study web dev for 3 hours', 'today', 'medium'));
projectOne.logTodos();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1ha2VQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB7IGRhaWx5VG9kb3M6IFtdIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0c0NvbnRyb2xsZXIoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IG1ha2VQcm9qZWN0cygpLmRhaWx5VG9kb3M7XHJcblxyXG4gICAgY29uc3QgYWRkVG9kbyA9IChvYmopID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nVG9kb3MgPSAoKSA9PiB7IGNvbnNvbGUubG9nKHByb2plY3RzKSB9O1xyXG5cclxuICAgIHJldHVybiB7IHByb2plY3RzLCBhZGRUb2RvLCBsb2dUb2RvcyB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RPbmUgPSBwcm9qZWN0c0NvbnRyb2xsZXIoKTtcclxucHJvamVjdE9uZS5hZGRUb2RvKG1ha2VUb2Rvcygnc3R1ZHknLCAnc3R1ZHkgd2ViIGRldiBmb3IgMyBob3VycycsICd0b2RheScsICdtZWRpdW0nKSk7XHJcbnByb2plY3RPbmUubG9nVG9kb3MoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=