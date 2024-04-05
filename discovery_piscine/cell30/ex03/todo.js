function getToDoFromCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0;i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('todos=')) {
            return JSON.parse(cookie.substring(6));
        }
    }
    return [];
}
function saveToDosToCookie(todos) {
    document.cookie = `todos=${JSON.stringify(todos)}`;
    }

function loadTodos() {
    const todos = getToDoFromCookies();
    const ftList = document.getElementById('ft_list');
    ftList.innerHTML = '';
    todos.forEach( todo => {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = todo;
        todoDiv.addEventListener('click', function() {
            const confirmDelete = confirm("¿Quieres eliminar esta tarea?");
            if (confirmDelete) {
                ftList.removeChild(todoDiv);
                const index = todos.indexOf(todo);
                if (index !== -1) {
                    todos.splice(index, 1);
                    saveToDosToCookie(todos);
                }
            }
        });
        ftList.insertBefore(todoDiv, ftList.firstChild);
    });
}

function addNewTodo() {
        const todo = prompt("Introduce una nueva tarea:");
        if (todo !== null && todo !== '') {
            const ftList = document.getElementById('ft_list');
            const todoDiv = document.createElement('div');
            todoDiv.textContent = todo;
            todoDiv.addEventListener('click', function() {
                const confirmDelete = confirm("¿Quieres eliminar esta tarea?");
                if (confirmDelete) {
                    ftList.removeChild(todoDiv);
                    const index = todos.indexOf(todo);
                    if (index !== -1) {
                        todos.splice(index, 1);
                        saveToDosToCookie(todos);
                    }
                }
            });
            ftList.insertBefore(todoDiv, ftList.firstChild);
            const todos = getToDoFromCookies();
            todos.unshift(todo);
            saveToDosToCookie(todos);
        }
    }

    loadTodos();