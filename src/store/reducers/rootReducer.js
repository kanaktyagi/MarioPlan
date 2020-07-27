import authReducer from './authReducer'
import projectReducer from './projecReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer