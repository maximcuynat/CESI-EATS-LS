// Définition des types d'état global
export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

// Définition des types d'action Redux
export interface LoginAction {
    type: 'LOGIN_SUCCESS';
    payload: User;
}

export interface LogoutAction {
    type: 'LOGOUT';
}

export type AuthActionTypes = LoginAction | LogoutAction;

// Définition du type d'état global Redux (root state)
export interface RootState {
    auth: AuthState;
    // Ajouter d'autres slices d'état au besoin
}
