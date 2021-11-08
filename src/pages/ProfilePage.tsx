import React from 'react'
import { Container, Button, TextField, Typography, AppBar } from '@mui/material'
import { StyledTextField } from '../components/StyledTextField';
import { useHistory } from 'react-router-dom';
import { routes } from '../routes';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../action-creators/index'
import { bindActionCreators } from 'redux';
import lady from '../images/Excalibur.png'

const ProfilePage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { toggleEditMode, editProfile } = bindActionCreators(actionCreators, dispatch);
    const isEditable = useSelector((state: RootStateOrAny) => state.isEditable)
    const userData = useSelector((state: RootStateOrAny) => state.userData)
    let btnTitle = isEditable ? 'Finish Editing' : 'Edit'
    
    const toggleEditFields = React.useCallback(() => toggleEditMode(), [toggleEditMode])
    const clickHandler = React.useCallback(() => history.push(routes.loginPage), [history])
    const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        editProfile({[e.target.name]: e.target.value })
    }, [editProfile])

    const showTextFields = () => {
        const { name, email, website, phone, username } = userData.users;
        return (
            <>
                <TextField sx={{ width: '220px'}} value={name} type='text' className="profile-page__field" label='Name' name='name' disabled={!isEditable} onChange={onChange} variant="outlined" color="secondary" size="small" margin="normal"/>
                <TextField sx={{ width: '220px'}} value={username} type='text' className="profile-page__field" label='Username' name='username' disabled={!isEditable} onChange={onChange} variant="outlined" color="secondary" size="small" margin="normal"/>
                <TextField sx={{ width: '220px'}} value={phone} type='text' className="profile-page__field" label='Phone' name='phone' disabled={!isEditable} onChange={onChange} variant="outlined" color="secondary" size="small" margin="normal"/>
                <TextField sx={{ width: '220px'}} value={email} type='text' className="profile-page__field" label='Email' name='email' disabled={!isEditable} onChange={onChange} variant="outlined" color="secondary" size="small" margin="normal"/>
                <TextField sx={{ width: '220px'}} value={website} type='text' className="profile-page__field" label='Website' name='website' disabled={!isEditable} onChange={onChange} variant="outlined" color="secondary" size="small" margin="normal"/>
            </>
        )
    }

    return (
        <>
            <div className="profile-page__container-main">
            {/* <Typography variant="body2"> */}
                <AppBar>
                    <AccountBoxIcon fontSize="large" sx={{ color:'#ababc1'}} />
                    <Button type="submit" variant="contained" color="secondary" onClick={clickHandler}>Logout</Button>
                </AppBar>
                {/* <header className="profile-page__header">
                    <AccountBoxIcon fontSize="large" sx={{ color:"#fff"}} />
                    <Button sx={{ height: 'max-content' }} type="submit" variant="contained" onClick={clickHandler}>Logout</Button>
                </header> */}
                <main className="profile-page__main">
                    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '60px', justifyContent: 'center'}}>
                        <img src={lady} alt="Lady" height='500' />
                        <form noValidate autoComplete="off" className="profile-page__form">
                            <Button sx={{ mb: 2 }} onClick={toggleEditFields} variant="contained" color="secondary">{ btnTitle }</Button>
                            { userData.loadComplete ? showTextFields() : <Typography variant="h5" sx={{ color: 'white' }}>Error. Could not load any data</Typography>}
                        </form>
                    </Container>
                </main>
            {/* </Typography> */}
            </div>
        </>
    )
}

export default ProfilePage
