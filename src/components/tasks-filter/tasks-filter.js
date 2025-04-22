import React from "react";

import './tasks-filter.css';

const TasksFilter = ({ filter, setFilter }) => {

	return (
		<ul className="filters">
			<li>
				<button
					className={filter === 'all' ? 'selected' : ''}
					onClick={() => setFilter('all')}
				>
					All
				</button>
			</li>
			<li>
				<button
					className={filter === 'active' ? 'selected' : ''}
					onClick={() => setFilter('active')}
				>
					Active
				</button>
			</li>
			<li>
				<button
					className={filter === 'completed' ? 'selected' : ''}
					onClick={() => setFilter('completed')}
				>
					Completed
				</button>
			</li>
		</ul>
	);
}

export { TasksFilter };