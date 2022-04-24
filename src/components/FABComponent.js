import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import styled from "@emotion/styled";

const WrapperDiv = styled.div`
    float: right;
    right: 50px;
    bottom: 50px;
    position: fixed;
`;

const FABComponent = () => {

    return (
        <WrapperDiv>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </WrapperDiv>
    )

}

export default FABComponent