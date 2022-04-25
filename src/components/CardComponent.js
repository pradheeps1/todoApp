import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { useDispatch } from 'react-redux'
import styled from "@emotion/styled";

const DoneWrapper = styled.div`
    float: right;
`;


const CardComponent = (props) => {
    const dispatch = useDispatch();
    
    const handleDone = async (e) => {
        e.stopPropagation();
        await markTodoDone(e.target.dataset.identifier, e.target.dataset.title, e.target.dataset.description, true);
        dispatch({ type: 'TOGGLE_TODO', payload: { id: e.target.dataset.identifier } });
    }

    const markTodoDone = async (id, title, description, completed) => {
      let rawResp = await fetch(`https://todos-prad-default-rtdb.asia-southeast1.firebasedatabase.app/todoItems/${id}.json`, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "description": description,
            "isComplete": completed,
            "title": title
          })
      });
      const content = await rawResp.json();
      return content;
  }

    return (
      <Card sx={{ minWidth: 275, maxWidth: 275 }} onClick={() => { props.onClick()}}>
          <CardContent>
            <Typography sx={{ fontSize: 14, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
        
            <Typography variant="body2" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '10px' }}>
                {props.description}
            </Typography>

          </CardContent>
          <DoneWrapper>
            <CardActions>
                { !props.isComplete ?
                    <Button data-identifier={props.identifier} data-title={props.title} data-description={props.description} variant="outlined" size="small" onClick={handleDone}>Done</Button> : 
                    <DoneAllRoundedIcon style={{ color: "green", padding: "3px" }} />
                }
            </CardActions>
          </DoneWrapper>
        </Card>
      );  
}

export default CardComponent;