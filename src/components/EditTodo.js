import React from 'react';
import styled from "@emotion/styled";


import { Box, Button, TextField, Modal, FormControl, Input, InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'


const styleModel = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: '5px',
    p: 4,
  };

const FooterWrapper = styled.div`
    margin-top: 20px;
    float: right;
`;

const EditTodo = (props) => {
    const { open, onClose } = props;
    const {cardTitle, cardDesc, cardCompleted, cardId} = props.card;

    const [title, setTitle] = React.useState(cardTitle);
    const [description, setDescription] = React.useState(cardDesc);

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        if(!!title) {
            const respContent = await editTodo(cardId, title, description, cardCompleted);
            dispatch({ type: 'EDIT_TODO', payload: { id: cardId, title, description, completed: respContent.isComplete } })
            onClose();
        }
      }

    const editTodo = async (id, title, description, completed) => {
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
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModel}>

                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="todo-item" required>Title</InputLabel>
                        <Input
                            required
                            id="todo-item"
                            variant="standard"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormControl>
                    
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            variant="standard"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <FooterWrapper>
                        <Button variant="contained" onClick={onClose} style={{ marginRight: "15px" }}>CANCEL</Button>
                        <Button variant="contained" onClick={handleSubmit}>SAVE</Button>  
                    </FooterWrapper>
                    
                </Box>
            </Modal>
        </>
    )
}

export default EditTodo