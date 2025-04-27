import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import './app.css';
import { AppHeader } from '../app-header';
import { NewTaskForm } from '../new-task-form';
import { TaskList } from '../task-list';
import { Footer } from '../footer';

const App = () => {

	const maxId = useRef(1); // useRef сохраняет значение между рендерами, но не вызывает перерисовку

	const createTodoItem = (label = 'New task') => { //переменная, создающая элемент
		return {
			label,
			completed: false,
			editing: false,
			createdAt: new Date(),
			id: maxId.current++
		}
	}

	createTodoItem.PropTypes = {
		label: PropTypes.string.isRequired,
		completed: PropTypes.bool,
		editing: PropTypes.bool
	}

	const [todoData, setTodoData] = useState([ //стейт для тасков
		createTodoItem('Completed task'),
		createTodoItem('Editing task'),
		createTodoItem('Active task')
	]);

	const [filter, setFilter] = useState('all'); // стейт для фильтра

	const getFilteredTodos = () => { //фильтрование элементов
		switch (filter) {
			case 'active':
				return todoData.filter((item) => !item.completed)
			case 'completed':
				return todoData.filter((item) => item.completed)
			default:
				return todoData
		}
	};

	const visibleTodos = getFilteredTodos();

	const deleteCompleted = () => { //удаление завершенных элементов
		setTodoData((prevTodoData) => {
			return prevTodoData.filter((item) => !item.completed)
		})
	}

	const deleteItem = (id) => { //удаление элемента
		setTodoData((prevTodoData) => {

			const idx = prevTodoData.findIndex((el) => el.id === id)
			return [
				...prevTodoData.slice(0, idx),
				...prevTodoData.slice(idx + 1)
			]
		})
	};

	const addItem = (text = 'Added task') => { //добавление элемента
		const newEl = createTodoItem(text)

		setTodoData((prevTodoData) => {

			return [
				...prevTodoData,
				newEl
			]
		})
	};

	function toggleProperty(arr, id, propName) { //функция для выполнения и редактирования

		const idx = arr.findIndex((el) => el.id === id) //находим индекс
		const oldItem = arr[idx] //находим элемент списка
		const newItem = { ...oldItem, [propName]: !oldItem[propName] } //создаем новый элемент, который имеет свойства старого

		return [ //возвращаем новый массив, в который встраиваем новый элемент
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	};

	const onToggleComplete = (id) => { //выполнение элемента
		setTodoData((prevTodoData) => toggleProperty(prevTodoData, id, 'completed'))
	};

	const onToggleEdit = (id) => { //редактирование
		setTodoData((prevTodoData) => toggleProperty(prevTodoData, id, 'editing'))
	};

	const onUpdateLabel = (id, newLabel) => {
		setTodoData((prevTodoData) =>
			prevTodoData.map((item) =>
				item.id === id ? { ...item, label: newLabel, editing: false } : item
			)
		);
	};

	const itemsLeftCount = () => {
		return todoData.filter((el) => !el.completed).length;
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
};

export { App };