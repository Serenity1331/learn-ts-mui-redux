import React from 'react'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { routes } from '../routes';
import type { FormEvent } from 'react'
import { RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import * as actionCreators from '../action-creators/index'
import { bindActionCreators } from 'redux';

function hasDigits(str: string) {
    return /\d/.test(str);
}

function isEmptyOrSpaces(str: string): boolean {
    return !str || str.indexOf(' ') >= 0
}

const LoginPage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { setLogin, setPassword, setLoginError, setPasswordError } = bindActionCreators(actionCreators, dispatch)
    const login = useSelector((state: RootStateOrAny) => state.loginForm.login);
    const loginError = useSelector((state: RootStateOrAny) => state.errors.login);
    const password = useSelector((state: RootStateOrAny) => state.loginForm.password);
    const passwordError = useSelector((state: RootStateOrAny) => state.errors.password);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError(false)
        setPasswordError(false);

        if (isEmptyOrSpaces(login)) {
            setLoginError(true)
        } else if (isEmptyOrSpaces(password) || password.length < 8 || !hasDigits(password)) {
            setPasswordError(true)
        } else {
            history.push(routes.profilePage)
        }
      }

    return (
        <div className="login-page__main">
            <div className="login-page__container-main">
                <form noValidate autoComplete="off" className="login-page__form" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <TextField error={loginError} value={login} onChange={(e) => setLogin(e.target.value)} label="Login" variant="outlined" color="secondary" size="small" margin="dense" required />
                    <TextField type="password" error={passwordError} value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" color="secondary" size="small" margin="dense" required />
                    <Button className="login-page__btn" sx={{ mt: 2 }} type="submit" variant="contained" color="secondary">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
