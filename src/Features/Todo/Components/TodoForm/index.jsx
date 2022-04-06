import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { TextField } from '@mui/material';



TodoForm.prototype = {
    onSubmit: PropTypes.func,
}
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const [value, setValue] = useState('')
    const { onSubmit } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) return
        if (!onSubmit) return;
        const data = {
            id: Math.floor(Math.random() * 1000),
            title: value,
            status: 'new',
            time: new Date().toLocaleString()
        }
        onSubmit(data)
        setValue('')
    }


    return (
        <div>
            <TextField
                id="outlined-helperText"
                label="Helper text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                helperText="Some important text"
            />
            {/* <input
                type="text"
               
            /> */}
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default TodoForm