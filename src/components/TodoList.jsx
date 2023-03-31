import React from 'react'

const todoItems = [
	{ title: 'Buy groceries', completed: false },
	{ title: 'Do laundry', completed: true },
	{ title: 'Clean house', completed: false },
]

function TodoList() {
	const todoItem = todoItems.map(item => (
		<li key={item.title}>
			<input type='checkbox' checked={item.completed} />
			<span>{item.title}</span>
		</li>
	))

	return <ul>{todoItem}</ul>
}

export default TodoList
