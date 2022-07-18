import { createTodoCard } from './create-dom-elements';
import { format, compareAsc, addDays, eachDayOfInterval } from 'date-fns';

const todos = [
    {
        type: 'General',
        checked: false,
        title: 'Todo-Title',
        date: '2022-07-20',
        prio: false,
        isTrash: false,
    },
    {
        type: 'General',
        checked: false,
        title: 'Todo-Title2',
        date: '2022-07-21',
        prio: false,
        isTrash: false,
    },
    {
        type: '0',
        checked: false,
        title: 'Todo-Title3',
        date: '2022-07-22',
        prio: false,
        isTrash: false,
    },
    {
        type: 'General',
        checked: false,
        title: 'Todo-Title4',
        date: '2022-07-22',
        prio: true,
        isTrash: false,
    },
    {
        type: 'General',
        checked: false,
        title: 'Trash-Todo',
        date: '2022-07-22',
        prio: false,
        isTrash: true,
    },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
    { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', prio: false, isTrash: false },
];

const todoFactory = (type, title, date, prio) => {
    const checked = false;
    const isTrash = false;
    return { type, checked, title, date, prio, isTrash };
};

const createTodo = (type, title, date, prio) => {
    const newTodo = todoFactory(type, title, date, prio);
    todos.push(newTodo);
    renderTodos();
};

const editTodo = (index, title, date, prio) => {
    const currentTodo = todos[index];
    currentTodo.title = title;
    currentTodo.date = date;
    currentTodo.prio = prio;
    renderTodos();
};

const updateStatus = (index, value) => {
    todos[index].checked = value;
    setTimeout(renderTodos, 2000);
};

const removeTodo = (todo) => {
    if (todo.isTrash) {
        todos.splice(todo.index, 1);
        renderTodos();
    } else {
        todos[todo.index].isTrash = true;
        renderTodos();
    }
};

const removeAllProjectTodos = (project) => {
    todos.forEach((todo, index) => {
        if (todo.type == project.iD) {
            todos.splice(index, 1);
        }
    });
};

const restoreTodo = (todo) => {
    todos[todo.index].isTrash = false;
    renderTodos();
};

const renderTodos = () => {
    const currentPage = document.querySelector('.main-container').getAttribute('data-id');
    const todoContainer = document.querySelector('.todo-container');
    const filteredTodos = filterTodos(currentPage);
    todoContainer.textContent = '';
    filteredTodos.forEach((todo) => createTodoCard(todo));
};

const filterTodos = (currentPage) => {
    const sortBtn = document.querySelector('.todo-sort');
    const filteredTodos = todos.filter((todo, index) => {
        todo.index = index;
        switch (currentPage) {
            case 'Today':
                return (
                    todo.date === format(new Date(), 'yyyy-MM-dd') && todo.isTrash === false && todo.checked === false
                );
            case 'Upcoming':
                const dates = getDates();
                return dates.includes(todo.date) && todo.isTrash === false && todo.checked === false;
            case 'Completed':
                return todo.checked === true && todo.isTrash === false;
            case 'Trash':
                return todo.isTrash === true;
            default:
                if (sortBtn && sortBtn.innerText === 'Important') {
                    return (
                        todo.type === currentPage &&
                        todo.isTrash === false &&
                        todo.prio === true &&
                        todo.checked === false
                    );
                }
                return todo.type === currentPage && todo.isTrash === false && todo.checked === false;
        }
    });

    filteredTodos.sort((a, b) => {
        return compareAsc(new Date(a.date), new Date(b.date));
    });
    return filteredTodos;
};

const getDates = () => {
    const dates = eachDayOfInterval({
        start: addDays(new Date(), 1),
        end: addDays(new Date(), 7),
    });

    dates.forEach((date, index) => dates.splice(index, 1, format(date, 'yyyy-MM-dd')));
    return dates;
};

export { todos, createTodo, removeTodo, removeAllProjectTodos, restoreTodo, editTodo, updateStatus, renderTodos };
