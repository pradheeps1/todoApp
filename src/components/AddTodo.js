
// NOT USED

import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

const AddTodo = () => {

  const dispatch = useDispatch()
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e) => {
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), title, description } })
  }

  return (
    <Box>
      <TextField
        required
        helperText="Add a new todo title"
        id="todo-item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          helperText="Add a new todo description"
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>SAVE</Button>
    </Box>
  )
}

export default AddTodo