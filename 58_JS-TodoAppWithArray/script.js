let todos = [
    {id: 1, task: 'first Todo'},
    {id: 2, task: 'second Todo'},
    {id: 3, task: 'thord Todo'},
    {id: 4, task: 'fourth Todo'}
]
const todoList = document.getElementById("todoList")

function showTodos(){
    
    todos.forEach(function (todo, index){
        const todoItem = document.createElement('li')
        todoItem.textContent = todo.task
        // console.log('run ho rha')
        todoList.appendChild(todoItem)
    })

}
showTodos()

function addTodo(){
    let invalue = document.getElementById("invalue").value 
    const newTodo = {id:5, task: invalue}  // creating the new todo obj
    todos.push(newTodo)   // pushing the new todo in the array
    todoList.textContent = ''  // making empty that ul tag in html
    document.getElementById("invalue").value = ''
    showTodos() // showing the new array of all todo
}