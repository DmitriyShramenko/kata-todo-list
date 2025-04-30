import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from 'date-fns'

import './task.css';

const Task = ({ label, className, onDeleted, onToggleComplete, onToggleEdit, isCompleted, isEditing, onUpdateLabel, createdAt }) => {

	let labelClass = isCompleted ? 'description completed' : 'description';
	let createdTime = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

	const [newLabel, setNewLabel] = useState(label);

	const handleChange = (e) => {
		setNewLabel(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdateLabel(newLabel);
	};

	if (isEditing) {
		return (
			<li className={className}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="edit"
						value={newLabel}
						onChange={handleChange}
					/>
				</form>
			</li>
		);
	}

	return (
		<li className={className}>
			<input
				className="toggle"
				onChange={onToggleComplete}
				type="checkbox"
				checked={isCompleted}
			/>

			<label>
				<span className={labelClass} onClick={onToggleComplete}>
					{label}
				</span>
				<button className='created'>{`created ${createdTime}`}</button>
			</label>

			<button className='icon icon-edit' onClick={onToggleEdit}></button>
			<button className='icon icon-destroy' onClick={onDeleted}></button>
		</li>
	);
};

Task.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onDeleted: PropTypes.func.isRequired,
	onToggleComplete: PropTypes.func.isRequired,
	onToggleEdit: PropTypes.func.isRequired,
	isCompleted: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	onUpdateLabel: PropTypes.func.isRequired,
	crearedAt: PropTypes.func.isRequired
};

export default Task;