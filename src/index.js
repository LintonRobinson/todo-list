import { todos } from './modules/todos.js';
import { buildPage } from './modules/general.js';

const main = document.querySelector('.main');

main.append(buildPage());

const test = todos.filter(checkType)

function checkType(todo) {
    return todo.type === 'random';
}

console.log(test);