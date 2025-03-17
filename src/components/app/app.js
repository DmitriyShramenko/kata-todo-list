import React from "react";

import './app.css';
import { AppHeader } from '../app-header';
import { NewTaskForm } from '../new-task-form';
import { TaskList } from '../task-list';
import { Footer } from '../footer';

const App = () => {

	const todoData = [
		{ label: 'Completed task', className: "completed", id: 1 },
		{ label: 'Editing task', className: "editing", id: 2 },
		{ label: 'Active task', className: "", id: 3 }
	];

	return (
		<div className="todoapp">

			<AppHeader />
			<NewTaskForm />

			<div className="main">
				<TaskList todos={todoData} />
				<Footer />
			</div>

		</div>
	);

}

export { App };