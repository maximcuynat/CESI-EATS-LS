import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (token: string): Promise<void> => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('Error setting token:', error);
    }
};

export const getToken = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
};

export const removeToken = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.error('Error removing token:', error);
    }
};

export const isTokenValid = (token: string): boolean => {
    try {
        const decoded: any = jwtDecode(token);
        return decoded.exp !== undefined && decoded.exp > Date.now() / 1000;
    } catch (error) {
        console.error('Error decoding token:', error);
        return false;
    }
};
