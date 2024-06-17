import { Dispatch } from 'redux';
import { login } from '../../api/authAPI';

export const authActions = {
    loginSuccess: (user: any) => ({
        type: 'LOGIN_SUCCESS',
        payload: user,
    }),
    logout: () => ({
        type: 'LOGOUT',
    }),
};

export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const user = await login(email, password);
        dispatch(authActions.loginSuccess(user));
    } catch (error) {
        alert(error.message);
    }
};
