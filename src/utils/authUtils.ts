import { jwtDecode } from 'jwt-decode';

export const setToken = (token: string): void => {
    localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const removeToken = (): void => {
    localStorage.removeItem('token');
};

export const isTokenValid = (token: string): boolean => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp !== undefined && decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};