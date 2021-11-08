import { Action } from "../interfaces"

const initialState = {
    login: '',
    password: '',
}

const loginFormReducer = (state = initialState, action : Action) => {
    switch(action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}

export default loginFormReducer;