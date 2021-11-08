import { Dispatch } from "redux"

export const setLogin = (payload: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SET_LOGIN',
            payload
        })
    }
}

export const setPassword = (payload: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SET_PASSWORD',
            payload
        })
    }
}

export const setLoginError = (payload: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SET_LOGIN_ERROR',
            payload
        })
    }
}

export const setPasswordError = (payload: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SET_PASSWORD_ERROR',
            payload
        })
    }
}

export const toggleEditMode = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TOGGLE_EDIT_MODE'
        })
    }
}

export const editProfile = (payload: { [x: string]: string }) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'EDIT_PROFILE',
            payload
        })
    }
}