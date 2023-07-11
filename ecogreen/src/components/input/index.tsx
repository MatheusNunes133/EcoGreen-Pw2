import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

const Input = () => {
    return (
        <TextField
            placeholder='Digite aqui'
            sx={{
                width: 369,
                height: 62
            }}
        />
    )
}

export default Input;