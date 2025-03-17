import React from "react";

import './task.css';

const Task = ({ label, className }) => {

	return (

		<li className={className}>
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>
					<span className="description">{label}</span>
					<span className="created">created 5 minutes ago</span>
				</label>
				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy"></button>
			</div>
			{className === "editing" && <input type="text" className="edit" defaultValue={label} />}
		</li>
	);

};

export { Task };