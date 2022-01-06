import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);

    const item = data.get('todo');

    await createTodo(item);

    todoForm.reset();

    await displayTodos();
});

async function displayTodos() {
    // fetch the todos
    const todos = await getTodos();
    // display the list of todos
    todosEl.textContent = '';
    
    for (let todo of todos) {
        const todoItemEl = renderTodo(todo);
        if (todo.complete === false) {
            todoItemEl.addEventListener('click', async() => {
                await completeTodo(todo.id);

                displayTodos();
                console.log(todo);
            });
        }
        

        todosEl.append(todoItemEl);
        
    }
    
    // be sure to give each todo an event listener
    
    
    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', async() => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    await deleteAllTodos();
    // then refetch and display the updated list of todos
    displayTodos();
});
