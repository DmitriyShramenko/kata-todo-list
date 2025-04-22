import React, { useState } from "react";

import './new-task-form.css';

const NewTaskForm = ({ onAdded }) => {

	const [formState, setFormState] = useState({
		label: ''
	})

	const onLabelChange = (e) => {
		setFormState((prevFormState) => ({
			...prevFormState,
			label: e.target.value
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault(); // чтобы страница не перезагружалась
		onAdded(formState.label);
		setFormState(() => ({
			label: ''
		}))
	}

	return (
		<form onSubmit={onSubmit}>
			<input className="new-todo"
				placeholder="What needs to be done?"
				autoFocus
				onChange={onLabelChange} // получаем событие формы
				value={formState.label}
			>
			</input>
		</form>
	);
};

export { NewTaskForm };