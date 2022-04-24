import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import styled from "@emotion/styled";

const DoneWrapper = styled.div`
    float: right;
`;


const CardComponent = (props) => {
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
                    <Button variant="outlined" size="small">Done</Button>
            </CardActions>
          </DoneWrapper>
        </Card>
      );  
}

export default CardComponent;