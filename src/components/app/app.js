import React, { useState, useRef } from "react";

import './app.css';
import { AppHeader } from '../app-header';
import { NewTaskForm } from '../new-task-form';
import { TaskList } from '../task-list';
import { Footer } from '../footer';
import { ItemAddForm } from '../item-add-form'

const App = () => {

	const [todoData, setTodoData] = useState([
		{ label: 'Completed task', /*className: "completed",*/ id: 1 },
		{ label: 'Editing task', /*className: "editing",*/ id: 2 },
		{ label: 'Active task', /*className: "",*/ id: 3 }
	]);

	const deleteItem = (id) => {
		setTodoData((prevTodoData) => {

			const idx = prevTodoData.findIndex((el) => el.id === id)
			const newArr = [
				...prevTodoData.slice(0, idx),
				...prevTodoData.slice(idx + 1)
			]

			return newArr
		})
	}

	const maxId = useRef(100); // useRef сохраняет значение между рендерами, но не вызывает перерисовку

	const addItem = (text) => {

		const newEl = {
			label: text,
			id: maxId.current++
		}

		setTodoData((prevTodoData) => {

			const newArr = [
				...prevTodoData,
				newEl
			]

			return newArr
		})
	}

	return (
		<div className="todoapp">

			<AppHeader />
			<NewTaskForm />

			<div className="main">
				<TaskList
					todos={todoData}
					onDeleted={deleteItem} />
				<Footer />
				<ItemAddForm onAdded={addItem} />
			</div>

		</div>
	);

}

export { App };