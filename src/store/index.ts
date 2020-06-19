import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './auth/reducer'

const reducer = combineReducers({
    auth: authReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
