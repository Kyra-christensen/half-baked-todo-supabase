export function renderTodo(todo) {
    // create a div and a p tag
    const newTodoEl = document.createElement('div');
    const todoP = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete === true) { 
        newTodoEl.classList.add('complete');
    } else {
        newTodoEl.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoP.classList.add('todo');
    // put the todo's text into the p tag
    todoP.textContent = todo.todo;
    // append stuff
    newTodoEl.append(todoP);
    // return the div
    return newTodoEl;
}