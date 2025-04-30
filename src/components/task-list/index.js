import React from "react";
import PropTypes from "prop-types";

import Task from '../task';
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

TaskList.propTypes = {
	todos: PropTypes.array.isRequired,
	onDeleted: PropTypes.func.isRequired,
	onToggleComplete: PropTypes.func.isRequired,
	onToggleEdit: PropTypes.func.isRequired,
	onUpdateLabel: PropTypes.func.isRequired
};

export default TaskList;