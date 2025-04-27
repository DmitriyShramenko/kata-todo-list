import React from "react";

import { Task } from '../task';
import './task-list.css';

const TaskList = ({ todos, onDeleted, onToggleComplete, onToggleEdit, onUpdateLabel }) => {

	return (
		<ul className="todo-list">
			{todos.map(({ id, ...itemProps }) => (
				<Task
					key={id} {...itemProps}
					onDeleted={() => onDeleted(id)}
					onToggleComplete={() => onToggleComplete(id)}
					onToggleEdit={() => onToggleEdit(id)}
					onUpdateLabel={(newLabel) => onUpdateLabel(id, newLabel)}
				/>
			))}
		</ul>
	);

};

export { TaskList };