const todos = [{
    type: 'general',
    checked: false,
    title: 'Todo-Title',
    date: 'dd-mm-year',
}];

 const  todoFactory = (title, date) => {
    const type = 'general';
    const checked = false;
    return { type, checked, title, date }
 }

 const createTodo = (title, date) => {
    const newTodo = todoFactory(title, date);
    todos.push(newTodo);
    console.log(todos);
 };

export { todos, createTodo };