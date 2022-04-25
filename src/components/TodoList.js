import { Box, List, ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import CardComponent from './CardComponent';
import {VISIBILITY_FILTERS} from '../constants';


const TodoList = () => {

  const todos = useSelector((state) => state.rootReducer.todos);
  const filter = useSelector((state) => state.rootReducer.visibilityFilter);
  console.log(filter);

  console.log(todos);
  return (
    todos.allIds.length > 0 ?
    <Box>
      { Object.keys(todos.byIds).map((key, index) => {
        if(filter === VISIBILITY_FILTERS.COMPLETED) {
          
        }
        return (
          <List>
            <ListItem>
              {/* <ListItemText primary={todos.byIds[key].title} /> */}
              <CardComponent title={todos.byIds[key].title} description={todos.byIds[key].description} identifier={key} 
                isCompleted={todos.byIds[key].completed}/>
            </ListItem>
          </List>)
      })}
    </Box> : 
      <div>
        <h1>Good day... </h1>
        <h1>No active todos...</h1>
      </div>
    
  )
}

export default TodoList