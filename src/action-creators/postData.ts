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

const object = {
    method: 'POST',
    body: JSON.stringify({
        name: 'Jennifer',
        username: 'Excalibur',
        phone: '1-666-11-22',
        email: 'yahoo@yahoo.com',
        website: 'yahoo.com'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}

export const postData = (url: string) => (dispatch: Dispatch) => {
    fetch(url, object)
        .then(response => response.json())
        .then(users => {
            dispatch(addUsersSuccess(users))
            console.log(users)
        })
        .catch(error => dispatch(addUsersFailure(error.message)))
}

