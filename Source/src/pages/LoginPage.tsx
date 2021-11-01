import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom';
import type { FormEvent } from 'react'

function hasWhiteSpace(str: string) {
    return str.indexOf(' ') >= 0;
}

function hasDigits(str: string) {
    return /\d/.test(str);
}

function isEmptyOrSpaces(str: string): boolean {
    return !str || str.match(/^ *$/) !== null;
}

const LoginPage: React.FC = () => {
    const history = useHistory();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    // useCallback ?
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError(false);
        setPasswordError(false);

        // if (login === '' || hasWhiteSpace(login)) {
        //     setLoginError(true);
        // }

        // OR

        // if (isEmptyOrSpaces(login)) {
        //     setLoginError(true);
        // }


        if (login === '') {
            setLoginError(true);
        } else if (password === '') {
            setPasswordError(true);
        } else if (hasWhiteSpace(login)) {
            setLoginError(true);
        } else if (hasWhiteSpace(password)) {
            setPasswordError(true);
        } else if (password.length < 8 || !hasDigits(password)) {
            console.log(password.length < 8, 'Less than 8 characters')
            console.log(!hasDigits(password), 'Does not contain digits')
            setPasswordError(true);
        } else {
            history.push('/learn-ts-mui-redux/profile')
        }
      }

    return (
        <div className="login-page__main">
            <div className="login-page__container-main">
                <form noValidate autoComplete="off" className="login-page__form" onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <TextField error={loginError} value={login} onChange={(e) => setLogin(e.target.value)} id="outlined-basic" label="Login" variant="outlined" color="secondary" size="small" margin="dense" required />
                    <TextField error={passwordError} value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" color="secondary" size="small" margin="dense" required />
                    <Button className="login-page__btn" sx={{ mt: 2 }} type="submit" variant="contained" color="secondary">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
