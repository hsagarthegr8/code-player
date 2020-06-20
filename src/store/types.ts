import { AuthState } from './auth/types'
import { UserState } from './user/types'

export interface ApplicationState {
    auth: AuthState
    user: UserState
}
