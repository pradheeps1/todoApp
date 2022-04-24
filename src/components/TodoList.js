import { Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import CardComponent from './CardComponent';



const TodoList = () => {

  const todos = useSelector((state) => state.rootReducer.todos);

  console.log(todos)
  return (
    todos.allIds.length > 0 ?
    <Box>
      { Object.keys(todos.byIds).map((key, index) => {
        return (
          <List>
            <ListItem key={index}>
              {/* <ListItemText primary={todos.byIds[key].title} /> */}
              <CardComponent title={todos.byIds[key].title} description={todos.byIds[key].description}/>
            </ListItem>
          </List>)
      })}
    </Box> : 
    
      <div>
        <h1> Good day... </h1>
        <h1>No active todos...</h1>
      </div>
    
  )
}

export default TodoList