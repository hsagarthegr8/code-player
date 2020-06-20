import { UserState, UserActionTypes, SET_CURRENT_USER } from './types'
import { LOGOUT, LogOutAction } from '../auth/types'

const initialState: UserState = {
    username: '',
    email: '',
}

const userReducer = (state = initialState, action: UserActionTypes | LogOutAction): UserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.payload
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

export default userReducer
