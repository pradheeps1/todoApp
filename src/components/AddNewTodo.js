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

const AddNewTodo = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        handleClose();
        dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), title, description } })
      }

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
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
                            required
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={1}
                            variant="standard"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <FooterWrapper>
                        <Button variant="contained" onClick={handleClose}>CANCEL</Button>  
                        <Button variant="contained" onClick={handleSubmit}>SAVE</Button>  
                    </FooterWrapper>
                    
                </Box>
            </Modal>
        </>
    )
}

export default AddNewTodo