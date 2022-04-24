import { Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {

  const todos = useSelector((state) => state.rootReducer.todos);

  console.log(todos)
  return (
    <Box>
      { Object.keys(todos.byIds).map((key, index) => {
        return (
          <List>
            <ListItem>
              <ListItemText primary={todos.byIds[key].title} />
            </ListItem>
          </List>)
      })}
    </Box>
  )
}

export default TodoList