import { createBtn, createDiv, createH2, createPara, createSvg } from './create-dom-elements';
import { openModal } from './modal';
import { removeProject, renderTrashProjects } from './projects';
import { renderTodos } from './todos';

const buildGeneral = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const createTodoBtn = createBtn('todo-create');

    mainContainer.setAttribute('data-id', 'General');
    title.innerText = 'General';
    desc.innerText = 'A general list of random todos.';
    createTodoBtn.append(createSvg('plus'));
    createTodoBtn.addEventListener('click', () => openModal());

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer, createTodoBtn);

    renderTodos();
}

const buildToday = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');

    title.innerText = 'Today';
    desc.innerText = 'All todos dated today';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer);

    renderTodos();
}

const buildUpcoming = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');

    title.innerText = 'Upcoming';
    desc.innerText = 'All upcoming todos in the next week';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer);

    renderTodos();
}

const buildTrash = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const projectContainer = createDiv('project-container');

    mainContainer.setAttribute('data-id', 'Trash');
    title.innerText = 'Trash';
    desc.innerText = 'All deleted todos and projects';
    projectContainer.innerText = 'Test';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer, projectContainer);

    renderTodos();
    renderTrashProjects();
}

const buildProjectPage = (project, index) => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH2('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const createTodoBtn = createBtn('todo-create');
    const delProjectBtn = createBtn('project-delete');

    mainContainer.setAttribute('data-id', index);
    title.innerText = project.title;
    desc.innerText = project.desc;
    createTodoBtn.append(createSvg('plus'));
    createTodoBtn.addEventListener('click', () => openModal());
    delProjectBtn.append(createSvg('delete'));
    delProjectBtn.addEventListener('click', () => removeProject(project, index));

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer, createTodoBtn, delProjectBtn);

    renderTodos();
}

export {
    buildGeneral,
    buildToday,
    buildUpcoming,
    buildTrash,
    buildProjectPage,
}