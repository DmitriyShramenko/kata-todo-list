import React from "react";

import { TasksFilter } from '../tasks-filter';
import './footer.css';

const Footer = ({ todoLength, filter, setFilter, deleteCompleted }) => {

	return (
		<div className="footer">
			<span className="todo-count">{todoLength} items left</span>
			<TasksFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<button
				className="clear-completed"
				onClick={deleteCompleted}
			>
				Clear completed
			</button>
		</div>
	);

};

export { Footer };