import { todos } from './modules/todos.js';
import { buildPage } from './modules/general.js';
import { openProjectModal } from './modules/modal.js';

const main = document.querySelector('.main');
const navBtn = document.querySelector('.header-nav-btn');

main.append(buildPage());

navBtn.addEventListener('click', () => {
    openProjectModal();
})





const test = todos.filter(checkType)

function checkType(todo) {
    return todo.type === 'random';
}

console.log(test);