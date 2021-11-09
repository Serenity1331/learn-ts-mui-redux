
const initialState = {
    loadComplete: false,
    users: {},
}

const userReducer = (state = initialState, action : any) => {
    switch(action.type) {
        case 'FETCH_USERS_SUCCESS':
            return {
                loadComplete: true,
                users: action.payload,
            }
        case 'FETCH_USERS_FAILURE':
            return {
                loadComplete: false,
                error: action.payload
            }
        case 'POST_USERS_SUCCESS':
            return {
                loadComplete: true,
                users: action.payload,
            }
        case 'POST_USERS_FAILURE':
            return {
                loadComplete: false,
                error: action.payload
            }
        case 'EDIT_PROFILE':
            return {
                loadComplete: true,
                users: {...state.users, ...action.payload}
            }
        default:
            return state
    }
}

export default userReducer;