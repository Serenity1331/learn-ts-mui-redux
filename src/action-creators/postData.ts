import { Dispatch } from "redux"

export const addUsersSuccess = (users: object) => {
    return {
            type: 'POST_USERS_SUCCESS',
            payload: users
        }
}

export const addUsersFailure = (error: any) => {
    return {
        type: 'POST_USERS_FAILURE',
        payload: error
    }
}

export const postData = (url: string, body: object) => (dispatch: Dispatch) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(users => {
            dispatch(addUsersSuccess(users))
            console.log(users)
        })
        .catch(error => dispatch(addUsersFailure(error.message)))
}

