import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './new-task-form.css'

const NewTaskForm = ({ onAdded }) => {
  const [formState, setFormState] = useState({
    label: '',
  })

  const onLabelChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      label: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onAdded(formState.label)
    setFormState(() => ({
      label: '',
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onLabelChange}
        value={formState.label}
      ></input>
    </form>
  )
}

NewTaskForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
}

export default NewTaskForm
