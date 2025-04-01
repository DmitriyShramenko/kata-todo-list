import React from "react";

const ItemAddForm = ({ onAdded }) => {

	return (
		<button
			onClick={() => onAdded('hello world')}> Add Item </button>
	);
};

export { ItemAddForm };