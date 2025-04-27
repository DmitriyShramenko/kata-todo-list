import React, { useState } from "react";
import { formatDistanceToNow } from 'date-fns'

import './task.css';

const Task = ({ label, className, onDeleted, onToggleComplete, onToggleEdit, completed, editing, onUpdateLabel, createdAt }) => {

	let labelClass = completed ? 'description completed' : 'description';
	let createdTime = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

	const [newLabel, setNewLabel] = useState(label);

	const handleChange = (e) => {
		setNewLabel(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdateLabel(newLabel);
	};

	if (editing) {
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
				checked={completed}
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
}

export { Task };