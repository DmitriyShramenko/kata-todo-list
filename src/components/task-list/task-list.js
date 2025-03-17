import React from "react";

import { Task } from '../task';
import './task-list.css';

const TaskList = ({ todos }) => {

	return (
		<ul className="todo-list">
			{todos.map(({ id, ...itemProps }) => (
				<Task key={id} {...itemProps} />
			))}
		</ul>
	);

};

export { TaskList };