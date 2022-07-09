import { todos } from './modules/todos.js';
import { buildPage } from './modules/general.js';
import { openProjectModal } from './modules/modal.js';
import { renderProjectNav } from './modules/projects.js';

const navBtn = document.querySelector('.header-nav-btn');
const navLinks = document.querySelectorAll('.header-main-nav-link');

navBtn.addEventListener('click', () => {
    openProjectModal();
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(link.innerText)
        switch (link.innerText) {
            case 'General':
                buildPage();
                break;
            case 'Today':
                break;
            case 'Upcoming':
                break;
            case 'Trash':
                break;
        };
    });
});

renderProjectNav()





const test = todos.filter(checkType)

function checkType(todo) {
    return todo.type === 'random';
}

console.log(test);