import User from "../../types/UserType"

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    error: string | null
}

export interface RootState {
    auth: AuthState
}