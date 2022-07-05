import { todos } from './modules/todos.js';
import { buildPage } from './modules/general.js';

const main = document.querySelector('.main');

main.append(buildPage());

console.log(todos[0]);