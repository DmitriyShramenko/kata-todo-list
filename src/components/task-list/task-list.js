import React from "react";

import { Task } from '../task';
import './task-list.css';

const TaskList = ({ todos, onDeleted, onToggleComplete, onToggleEdit }) => {

	return (
		<ul className="todo-list">
			{todos.map(({ id, ...itemProps }) => (
				<Task key={id} {...itemProps}
					onDeleted={() => onDeleted(id)}
					onToggleComplete={() => onToggleComplete(id)}
					onToggleEdit={() => onToggleEdit(id)}
				/>
			))}
		</ul>
	);

};

export { TaskList };