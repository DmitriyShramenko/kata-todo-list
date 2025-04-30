import React, { useState, useRef } from "react";

import './app.css';
import AppHeader from '../app-header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {

	const maxId = useRef(1);

	const createTodoItem = (label = 'New task') => {
		return {
			label,
			isCompleted: false,
			isEditing: false,
			createdAt: new Date(),
			id: maxId.current++
		}
	}

	const [todoData, setTodoData] = useState([
		createTodoItem('Completed task'),
		createTodoItem('Editing task'),
		createTodoItem('Active task')
	]);

	const [filter, setFilter] = useState('all');

	const getFilteredTodos = () => {
		switch (filter) {
			case 'active':
				return todoData.filter((item) => !item.isCompleted)
			case 'completed':
				return todoData.filter((item) => item.isCompleted)
			default:
				return todoData
		}
	};

	const visibleTodos = getFilteredTodos();

	const deleteCompleted = () => {
		setTodoData((prevTodoData) => {
			return prevTodoData.filter((item) => !item.isCompleted)
		})
	}

	const deleteItem = (id) => {
		setTodoData((prevTodoData) => {

			const idx = prevTodoData.findIndex((el) => el.id === id)
			return [
				...prevTodoData.slice(0, idx),
				...prevTodoData.slice(idx + 1)
			]
		})
	};

	const addItem = (text = 'Added task') => {
		const newEl = createTodoItem(text)

		setTodoData((prevTodoData) => {

			return [
				...prevTodoData,
				newEl
			]
		})
	};

	function toggleProperty(arr, id, propName) {

		const idx = arr.findIndex((el) => el.id === id)
		const oldItem = arr[idx]
		const newItem = { ...oldItem, [propName]: !oldItem[propName] }

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	};

	const onToggleComplete = (id) => {
		setTodoData((prevTodoData) => toggleProperty(prevTodoData, id, 'isCompleted'))
	};

	const onToggleEdit = (id) => {
		setTodoData((prevTodoData) => toggleProperty(prevTodoData, id, 'isEditing'))
	};

	const onUpdateLabel = (id, newLabel) => {
		setTodoData((prevTodoData) =>
			prevTodoData.map((item) =>
				item.id === id ? { ...item, label: newLabel, isEditing: false } : item
			)
		);
	};

	const itemsLeftCount = () => {
		return todoData.filter((el) => !el.isCompleted).length;
	};

	const itemsLeft = itemsLeftCount();

	return (
		<div className="todoapp">
			<AppHeader />
			<NewTaskForm onAdded={addItem} />
			<div className="main">
				<TaskList
					todos={visibleTodos}
					onDeleted={deleteItem}
					onToggleComplete={onToggleComplete}
					onToggleEdit={onToggleEdit}
					onUpdateLabel={onUpdateLabel}
				/>
				<Footer
					todoLength={itemsLeft}
					filter={filter}
					setFilter={setFilter}
					deleteCompleted={deleteCompleted}
				/>
			</div>
		</div>
	);
}

export default App;