const initialState = {
    user: null,
    isLoggedIn: false,
};

const authSlice = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default authSlice;
