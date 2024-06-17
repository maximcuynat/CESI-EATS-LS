import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    role: string;
    iat: number;
    exp: number;
}

interface SetUserPayload {
    user: User;
    token: string;
    iat: number;
    exp: number;
}

interface UserState {
    user: User | null;
    token: string | null;
    iat: number | null;
    exp: number | null;
}

const initialState: UserState = {
    user: null,
    token: null,
    iat: null,
    exp: null,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<SetUserPayload>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.iat = action.payload.iat;
            state.exp = action.payload.exp;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.iat = null;
            state.exp = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
