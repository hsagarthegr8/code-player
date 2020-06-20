import { SET_CURRENT_USER, SetCurrentUserAction, UserState } from './types'

export const setCurrentUser = (user: UserState): SetCurrentUserAction => ({
    type: SET_CURRENT_USER,
    payload: user,
})
