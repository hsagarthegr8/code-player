export interface UserState {
    username: string
    email: string
    profile?: Profile
}

export interface Profile {
    id: number
    firstName: string
    lastName: string
    middleName?: string
    occupation: string
    organizationName?: string
    skills: Skill[]
}

export interface Skill {
    name: string
}

export const SET_CURRENT_USER = 'GET_CURRENT_USER'

export interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER
    payload: UserState
}

export type UserActionTypes = SetCurrentUserAction
