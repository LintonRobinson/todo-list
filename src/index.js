import { todos } from './modules/todos.js';
import { createTodoCard } from './modules/create-dom-elements.js';

const todoContainer = document.querySelector('.todo-container');

const newTodo = createTodoCard(todos[0]);

todoContainer.append(newTodo);

console.log(todos[0]);