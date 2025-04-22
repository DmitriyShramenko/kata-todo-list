import React, { useState } from "react";
import './task.css';

const Task = ({ label, className, onDeleted, onToggleComplete, onToggleEdit, completed, editing }) => {

	let labelClass = 'description';
	let createdClass = 'created';
	let editIconClass = 'icon icon-edit';
	let destroyIconClass = 'icon icon-destroy';

	if (completed) {
		labelClass += ' completed';
	} else if (editing) {
		labelClass += ' edit';
		createdClass += ' hideEl';
		editIconClass = '';
		destroyIconClass = '';
	}

	return (

		<li className={className}>

			<input className="toggle" onClick={onToggleComplete} type="checkbox" />

			<label>
				<span className={labelClass} onClick={onToggleComplete}>
					{label}
				</span>
				<button className={createdClass}>created 5 minutes ago</button>
			</label>

			<button className={editIconClass} onClick={onToggleEdit}></button>
			<button className={destroyIconClass} onClick={onDeleted}></button>

		</li>

	);
}

export { Task };