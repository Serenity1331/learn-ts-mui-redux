import { Action } from "../interfaces"

const isEditableReducer = (state = false, action : Action) => {
    switch(action.type) {
        case 'TOGGLE_EDIT_MODE':
            return !state
        default:
            return state
    }
}

export default isEditableReducer;