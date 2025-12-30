let todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

const todoList = document.getElementById("todoList");

function showTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerHTML = `
            <i class="fa-solid fa-check"></i> ${todo.task}
        `;
        span.className = todo.isCompleted ? "completed" : "";
        span.onclick = () => completeToggle(index);

        const btn = document.createElement("button");
        btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btn.onclick = () => deleteTodo(index);

        li.appendChild(span);
        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

showTodos();

function addTodo() {
    const input = document.getElementById("invalue");
    const task = input.value.trim();

    if (!task) return;

    todos.push({ task, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
    showTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
}

function deleteAll() {
    todos = [];
    localStorage.removeItem("todos");
    showTodos();
}

function completeToggle(index) {
    todos[index].isCompleted = !todos[index].isCompleted;
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
}
