export default function makeTodo(title, description, dueDate, priority) {
    return { title, description, dueDate, priority, check: 'false' }
}