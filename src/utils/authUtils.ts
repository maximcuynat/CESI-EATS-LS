import { jwtDecode } from 'jwt-decode';
import {AsyncStorage} from 'react-native';

export const setToken = (token: string): void => {
    AsyncStorage.setItem('token', token);    
};

export const getToken = (): string | null => {
    return AsyncStorage.getItem('token');
};

export const removeToken = (): void => {
    AsyncStorage.removeItem('token');
};

export const isTokenValid = (token: string): boolean => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp !== undefined && decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};