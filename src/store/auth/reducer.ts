import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from './types'

const initialState: AuthState = {
    isLoggedIn: false,
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

export default authReducer
