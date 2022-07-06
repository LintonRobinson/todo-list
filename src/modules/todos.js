import { createTodoCard } from "./create-dom-elements";

const todos = [
    {
        type: 'general',
        checked: false,
        title: 'Todo-Title',
        date: 'dd-mm-year',
    },
    {
        type: 'general',
        checked: false,
        title: 'Todo-Title2',
        date: 'dd-mm-year',
    }
];

 const  todoFactory = (title, date) => {
    const type = 'general';
    const checked = false;
    return { type, checked, title, date }
 }

 const createTodo = (title, date) => {
    const newTodo = todoFactory(title, date);
    todos.push(newTodo);
    renderTodos();
 };

 const renderTodos = () => {
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.textContent = '';
    todos.forEach(todo => todoContainer.append(createTodoCard(todo)));
 }

export { todos, createTodo };