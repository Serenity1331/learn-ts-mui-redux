import { Action } from "../interfaces"

const initialState = {
    login: false,
    password: false
}

const errorsReducer = (state = initialState, action : Action) => {
    switch(action.type) {
        case 'SET_LOGIN_ERROR':
            return {
                ...state,
                login: action.payload
            }
        case 'SET_PASSWORD_ERROR':
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}

export default errorsReducer;