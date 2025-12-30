let todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

const todoList = document.getElementById("todoList");
const editArea = document.getElementById("editArea");
const input = document.getElementById("invalue");
const form = document.getElementById("todoForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo();
});

function showTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = todo.task;
        text.className = todo.isCompleted ? "completed" : "";
        text.onclick = () => toggleComplete(index);

        const actions = document.createElement("span");

        const editBtn = document.createElement("button");
        editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        editBtn.onclick = () => editTodo(index);

        const delBtn = document.createElement("button");
        delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        delBtn.onclick = () => deleteTodo(index);

        actions.append(editBtn, delBtn);
        li.append(text, actions);
        todoList.appendChild(li);
    });

    input.focus();
}

showTodos();

function addTodo() {
    const value = input.value.trim();
    if (!value) return alert("Todo can't be empty");

    todos.push({ task: value, isCompleted: false });
    saveAndRender();
    input.value = "";
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveAndRender();
}

function deleteAll() {
    todos = [];
    localStorage.removeItem("todos");
    showTodos();
}

function toggleComplete(index) {
    todos[index].isCompleted = !todos[index].isCompleted;
    saveAndRender();
}

function editTodo(index) {
    editArea.innerHTML = "";

    const editInput = document.createElement("input");
    editInput.value = todos[index].task;

    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = `<i class="fa-solid fa-check"></i> Save`;

    saveBtn.onclick = () => {
        todos[index].task = editInput.value.trim();
        editArea.innerHTML = "";
        saveAndRender();
    };

    editArea.append(editInput, saveBtn);
}

function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos();
}
