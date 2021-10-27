import React, { useState } from 'react'
import { Container, Button, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom';
import CustomTextField from '../components/CustomTextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ProfilePage: React.FC = () => {
    const history = useHistory();
    const [editDisabled, setEditDisabled] = useState<boolean>(true);

    let btnTitle;
    editDisabled ? btnTitle = 'Edit' : btnTitle = 'Finish Editing'

    interface Profile {
        name: string,
        surname: string,
        age: number,
        occupation: string,
        phone: string;
    }

    const [fieldValue, setFieldValue] = useState<Profile>({
        name: 'James',
        surname: "Bond",
        age: 42,
        occupation: 'Agent',
        phone: '007',
    })

    const editFields = () => setEditDisabled(!editDisabled);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldValue({ ...fieldValue, [e.target.name]: e.target.value })
}
    
    return (
        <>
            <header className="profile-page__header">
                <AccountBoxIcon fontSize="large" sx={{ color:"#fff"}} />
                <Button sx={{ height: 'max-content' }} type="submit" variant="contained" onClick={() => history.push('/learn-ts-mui-redux/')}>Logout</Button>
            </header>
            <main className="profile-page__main">
                <Container className="profile-page__customer-info">
                    <form noValidate autoComplete="off" className="profile-page__form">
                        <Button sx={{ mb: 2 }} variant="contained" onClick={() => editFields()}>{ btnTitle }</Button>
                        <CustomTextField value={fieldValue.name} type='text' disabled={editDisabled} name={'Name'} changeHandler={(e) => handleChange(e)}/>
                        <CustomTextField value={fieldValue.surname} type='text' disabled={editDisabled} name={'Surname'} changeHandler={(e) => handleChange(e)}/>
                        <CustomTextField value={fieldValue.age} type='number' disabled={editDisabled} name={'Age'} changeHandler={(e) => handleChange(e)}/>
                        <CustomTextField value={fieldValue.occupation} type='text' disabled={editDisabled} name={'Occupation'} changeHandler={(e) => handleChange(e)}/>
                        <CustomTextField value={fieldValue.phone} type='number' disabled={editDisabled} name={'Phone'} changeHandler={(e) => handleChange(e)}/>
                        {/* { Object.entries(fieldValue).map(([key, val], idx) => <TextField defaultValue={val} className="profile-page__field" id="outlined-basic" label={key.toUpperCase()} variant="outlined" color="primary" size="small" margin="normal" key={idx} disabled={editDisabled} name={key} onChange={(e) => handleChange(e)}/>) } */}
                    </form>
                </Container>
            </main>
        </>
    )
}

export default ProfilePage
