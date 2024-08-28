//your code here
document.getElementById('addTodoBtn').addEventListener('click', function() {
	const input = document.getElementById('newTodoInput');
	const todoText = input.value.trim();
	if(todoText === '') {
		alert('Please enter a todo item.');
        return;
	}
	const todoList = document.getElementById('todoList');
	const newTodo = document.createElement('li');
	newTodo.textContent = todoText;

	newTodo.addEventListener('click', function () {
		input.value = '';
	})
	todoList.appendChild(newTodo);
    input.value = '';
})
