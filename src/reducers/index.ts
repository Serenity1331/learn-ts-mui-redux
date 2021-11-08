import { combineReducers } from 'redux'
import errorsReducer from './errorsReducer';
import isEditableReducer from './isEditableReducer';
import loginFormReducer from './loginFormReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
    loginForm: loginFormReducer,
    errors: errorsReducer,
    isEditable: isEditableReducer,
    userData: userReducer
})

export default allReducers;