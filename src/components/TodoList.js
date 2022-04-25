import { Box, List, ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';

import { VISIBILITY_FILTERS } from "../constants";



const TodoList = (props) => {

  const todos = useSelector((state) => state.rootReducer.todos);
  const filter = useSelector((state) => state.rootReducer.visibilityFilter);
  const todoById = todos.byIds;

  const handleCardClick = (title, description, completed, key) => {
     props.onCardClick(title, description, completed, key);
  }

  const listItems = () => {
    return Object.keys(todoById).map((key, index) => {
      if (filter === VISIBILITY_FILTERS.COMPLETED && todoById[key].isComplete) {
        return (
          <ListItem key={key} style={{width: 'auto'}}>
            <CardComponent title={todoById[key].title} description={todoById[key].description} identifier={key}
              isCompleted={todoById[key].isComplete} onClick={() => handleCardClick(todoById[key].title, todoById[key].description, todoById[key].isComplete, key )} />
          </ListItem>
        )
      } else if (filter === VISIBILITY_FILTERS.INCOMPLETE && !todoById[key].isComplete) {
        return (
          <ListItem key={key} style={{width: 'auto'}}>
            <CardComponent title={todoById[key].title} description={todoById[key].description} identifier={key}
              isCompleted={todoById[key].isComplete} onClick={() => handleCardClick(todoById[key].title, todoById[key].description, todoById[key].isComplete, key)} />
          </ListItem>
        )
      } else if (filter === VISIBILITY_FILTERS.ALL) {
        return (
          <ListItem key={key} style={{width: 'auto'}}>
            <CardComponent title={todoById[key].title} description={todoById[key].description} identifier={key}
              isCompleted={todoById[key].isComplete} onClick={() => handleCardClick(todoById[key].title, todoById[key].description, todoById[key].isComplete, key)} />
          </ListItem>
        )
      } else {
        return null;
      }
    })
  }

  return (
    todos.allIds.length > 0 ?
      <Box>
        <List style={{display: 'flex', flexWrap: 'wrap'}}>
          {listItems()}
        </List>
      </Box> : 
      <div>
        <h1>Good day... </h1>
        <h1>No active todos...</h1>
      </div>
    
  )
}

export default TodoList