import { Dispatch } from "redux"

export const fetchUsersSuccess = (users: object) => {
    return {
            type: 'FETCH_USERS_SUCCESS',
            payload: users
        }
}

export const fetchUsersFailure = (error: any) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

export const fetchData = (url: string) => (dispatch: Dispatch) => {
    fetch(url)
        .then(response => response.json())
        .then(users => dispatch(fetchUsersSuccess(users)))
        .catch(error => dispatch(fetchUsersFailure(error.message)))
}

