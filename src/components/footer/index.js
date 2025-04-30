import React, { useState } from "react";
import PropTypes from "prop-types";

import TasksFilter from '../tasks-filter';
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

Footer.propTypes = {
	todoLength: PropTypes.func.isRequired,
	filter: PropTypes.array.isRequired,
	setFilter: PropTypes.func.isRequired,
	deleteCompleted: PropTypes.func.isRequired
};

export default Footer;