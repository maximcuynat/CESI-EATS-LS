import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const login = async (pseudo: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authentification/login`, { pseudo: pseudo, mot_de_passe:  password });
        return response;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de la connexion');
    }
};

export const signup = async (email: string, password: string, name: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authentification//signup`, { email, password, name });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
};

export default { login, signup };