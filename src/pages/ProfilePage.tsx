import React from 'react'
import { Button, TextField, Typography, AppBar, Grid } from '@mui/material'
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
    console.log(userData)
    
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
        <div className="profile-page__container-main">
            <AppBar>
                <AccountBoxIcon fontSize="large" sx={{ color:'#ababc1'}} />
                <Button type="submit" variant="contained" color="secondary" onClick={clickHandler}>Logout</Button>
            </AppBar>
            <main className="profile-page__main">
                <Grid container justifyContent="center" alignItems="center" sx={{pt: 10}}>
                    <Grid item >
                        <img src={lady} alt="Lady" height='500' />
                    </Grid>
                    <Grid item>
                        <form noValidate autoComplete="off" className="profile-page__form">
                            <Button sx={{ mb: 2, minWidth: '100px', fontSize: '16px'}} onClick={toggleEditFields} variant="contained" color="secondary">{ btnTitle }</Button>
                            { userData.loadComplete ? showTextFields() : <Typography variant="h5" sx={{ color: 'white' }}>Error. Could not load any data</Typography>}
                        </form>
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

export default ProfilePage
