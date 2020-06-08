export interface AuthState {
    isLoggedIn: boolean
    username?: string
    token?: string
    tokenExpires?: Date
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface LogInAction {
    type: typeof LOGIN
    payload: AuthState
}

export interface LogOutAction {
    type: typeof LOGOUT
}

export type AuthActionTypes = LogInAction | LogOutAction
