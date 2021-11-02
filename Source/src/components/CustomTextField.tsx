import React from 'react'
import { TextField } from '@mui/material'

interface Field {
    value: string | number,
    disabled: boolean,
    name: string,
    type: string,
    changeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
// is this component will use same id's for different fields?
const CustomTextField: React.FC<Field> = ({ value, disabled, name, type, changeHandler }) => {
    return (
        <TextField defaultValue={value} type={type} className="profile-page__field" id="outlined-basic" label={name} variant="outlined" color="primary" size="small" margin="normal" disabled={disabled} name={name} onChange={changeHandler}/>
    )
}

export default CustomTextField
