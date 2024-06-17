import { jwtDecode } from 'jwt-decode';

export const setToken = (token: string): void => {
    sessionStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return sessionStorage.getItem('token');
};

export const removeToken = (): void => {
    sessionStorage.removeItem('token');
};

export const isTokenValid = (token: string): boolean => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp !== undefined && decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};
