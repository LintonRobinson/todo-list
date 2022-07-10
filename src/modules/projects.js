import { buildGeneral, buildProjectPage } from "./build-pages";
import { createNavItem, createProjectCard } from "./create-dom-elements";
import { removeAllProjectTodos } from "./todos";

const projects = [
    {
        title: 'Project-Title',
        desc: 'Project One',
        isTrash: false,
    },
    {
        title: 'Project-Title2',
        desc: 'Project Two',
        isTrash: true,
    },
    {
        title: 'Project-Title3',
        desc: 'Project Three',
        isTrash: false,
    },
];

const projectFactory = (title, desc) => {
    const isTrash = false;
    return { title, desc, isTrash };
};

const createProject = (title, desc) => {
    const newProject = projectFactory(title, desc);
    projects.push(newProject);
    renderProjectNav();
};

const removeProject = (project, index) => {
    if (project.isTrash) {
        removeAllProjectTodos(project);
        projects.splice(index, 1);
        renderTrashProjects();
    } else {
        project.isTrash = true;
        buildGeneral();
    }
    renderProjectNav();
};

const restoreProject = (project) => {
    project.isTrash = false;
    renderTrashProjects();
    renderProjectNav();
}

const renderProjectNav = () => {
    const projectNav = document.querySelector('#projects-list');
    projectNav.textContent = '';

    projects.forEach((project, index) => {
        project.iD = index;
        if (project.isTrash === false) {
            const navItem = createNavItem('.header-nav-item', project.title);
            navItem.addEventListener('click', () => buildProjectPage(project, index));
            projectNav.append(navItem);
        };
    });
};

const renderTrashProjects = () => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.textContent = '';
    projects.forEach((project, index) => {
        if (project.isTrash) {
            createProjectCard(project, index);
        };
    });
};

export {
    createProject,
    removeProject,
    restoreProject,
    renderProjectNav,
    renderTrashProjects,
};