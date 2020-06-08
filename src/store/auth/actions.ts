import { LOGIN, LogInAction, LOGOUT, LogOutAction } from './types'

export const logIn = (token: string): LogInAction => {
    const tokenParts = token.split(/\./)
    const tokenDecoded = JSON.parse(window.atob(tokenParts[1]))
    const tokenExpires = new Date(tokenDecoded.exp * 1000)
    const username = tokenDecoded.username

    return {
        type: LOGIN,
        payload: {
            isLoggedIn: true,
            username,
            token,
            tokenExpires,
        },
    }
}

export const LogOut = (): LogOutAction => ({
    type: LOGOUT,
})
