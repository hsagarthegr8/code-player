import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
