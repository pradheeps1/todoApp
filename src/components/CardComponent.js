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
    const handleDone = (e) => {
        console.log(e.target.dataset.identifier);
        dispatch({ type: 'TOGGLE_TODO', payload: { id: e.target.dataset.identifier } })
    }
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275 }}>
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
                { !props.isCompleted ?
                    <Button data-identifier={props.identifier} variant="outlined" size="small" onClick={handleDone}>Done</Button> : 
                    <DoneAllRoundedIcon style={{ color: "green", padding: "3px" }} />
                }
            </CardActions>
          </DoneWrapper>
        </Card>
      );  
}

export default CardComponent;